# Welcome site
This is the welcome site for the project. The page people gets to when looking us up.

## Installation

Clone the repository with
```
    git clone
```

Install `node` and `npm` following instructions [here](https://www.npmjs.com/get-npm)
Install `yarn`
```
    npm install --global yarn
```

Inside the project run
```
    yarn run config
```

This will create the `node_modules` folder and a `.git/hooks/pre-commit` file.

## Working with this repository

Whenever you want to add to this repository, first pull the most recent `main` branch:
```
git checkout main
git pull --prune
```

Then, start changing the code. Once you're done, pull again the most recent changes (if needed) and switch to a new branch. See **Naming Conventions** section.
```
git pull
git checkout -b my-branch
```

Finally, commit and push your changes:
```
git add --all
git commit -m "Do something"
```

If any error appear after `git commit` it means the linter failed to validate the code, run `yarn run lint --fix`, then run
```
git add --all
git commit --amend
```

Finally you can push your changes:
```
git push -u origin my-branch
```

The output should look something like this:
```
Total 0 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'my-branch' on GitHub by visiting:
remote:      https://github.com/CanobbioE/<repo_name>/pull/new/my-branch
remote:
To github.com:CanobbioE/<repo_name>.git
 * [new branch]        my-branch -> my-branch
Branch 'my-branch' set up to track remote branch 'my-branch' from 'origin'.
```

Click on the url `https://github.com/CanobbioE/<repo_name>/pull/new/my-branch` and create a new pull request (PR).
Someone will, hopefully, approve it!

## Naming Conventions

### Branches
Branch should be named with ticket numbers. For example, if a ticket is `WEB-42: Add cute cat pictures to homepage` the branch should be named `WEB-42`, if no ticket is available, use the `no-ticket-` prefix (e.g. `no-ticket-fix-error-msg`).
Do NOT name any branch `master` or `develop`.

### Commits
Commits' messages must be in imperative form, i.e. the verbs must be imperative. To help with this, imagine the commit message to be preceded by `"This commit will..."`. Finally, commits must include the ticket number.

Here's an example, let's say we just added a new image to the homepage on our branch `WEB-42`, then the commit should be:
- :white_check_mark: WEB-42 - *(this commit will)* Add a new image to the homepage
- :x: *(this commit will)* Added a new image to the homepage
- :x: WEB-42 - *(this commit will)* New image on homepage