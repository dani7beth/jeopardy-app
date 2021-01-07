# Jeopardy Proj
- One thing to keep in mind while running this program if you refresh the page it restarts the game. This allows for replayability.
## Steps to setup and run
1. `git clone git@github.com:dani7beth/jeopardy-app.git`
2. `cd project-name`
3. `bundle install`
4. in database.yml change name of database `what_ever_you_named_your_start_project` to **project-name**
5. `rails db:create db:migrate db:seed`
6. `rails s -p 3001`
7. `cd client && yarn`
8. `yarn start`
### handle git
1.  - remove origin `git remote rm origin`
    - git add remote origin to new repo
