workflow "Lint and publish" {
  on = "push"
  resolves = [
    "Lint all projects",
    "Publish updated projects"
  ]
}

action "Don't skip CI" {
  uses = "ffflorian/actions/last_commit@master"
  args = "^(?:(?!\\[(ci skip|skip ci)\\]).)*$"
}

action "Install dependencies" {
  uses = "docker://node:10-slim"
  needs = "Don't skip CI"
  runs = "yarn"
}

action "Bootstrap projects" {
  uses = "docker://node:10-slim"
  needs = "Install dependencies"
  runs = "yarn"
  args = "boot"
}

action "Lint all projects" {
  uses = "docker://node:10-slim"
  needs = "Bootstrap projects"
  runs = "yarn"
  args = "lint"
}

action "Check for master branch" {
  uses = "actions/bin/filter@master"
  needs = "Lint all projects"
  args = "branch master"
}

action "Don't publish dependency updates" {
  uses = "ffflorian/actions/last_commit@master"
  needs = "Check for master branch"
  args = "^(?!chore\\(deps)"
}

action "Publish updated projects" {
  uses = "ffflorian/actions/lerna@master"
  needs = "Don't publish dependency updates"
  env = {
    GH_USER = "ffflobot"
  }
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN", "GH_TOKEN"]
}
