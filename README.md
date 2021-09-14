# mothership-char-gen

Functionally, the goal of this is to deliver an editable character sheet for Mothership. 
A user should be able to edit text-fields and checkboxes on the sheet, and be able to "lock" portions of the sheet to avoid accidental edits.
User changes will be posted to a database to keep information persistent. 

In addition to editable/saveable character sheet, there will be functionality to randomly generate characters.
This process should follow the rules outlined in the Mothership Player Survival Guide.

Outside of text-fields and checkboxes, there will need to be a way for a user to upload an image representing their character.

##### EXTRAS:
- Option to share a "read-only" version of a users sheet to other players
- Option to export character sheet as a PDF
- Option to export character sheet as JSON
  
  
##### Technical Goals:
- Experiment with a new database system to expand horizons
- Utilize Material-UI to create an aesthetic front-end
- Create a fully polished product, instead of a proof of concept or technical showcase
- Deploy not just to Heroku, but to personal "Motheship Hub Site" where i can continue to work on Mothership related projects
