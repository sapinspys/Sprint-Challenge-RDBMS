### Data Model

1. Identify the entities (tables):
- PROJECTS
- ACTIONS

2. Identify the attributes (columns):
- PROJECTS
  - id: int, pk, autoinc
  - name: varchar, unique, not null
  - description: text, not null
  - complete: boolean, default to false

- ACTIONS
  - id: int, pk, autoinc
  - description: text, not null
  - notes: text, not null
  - project_id: int, FK refs id in PROJECTS
  - complete: boolean, default to false


3. Identify the relationships:
- PROJECTS <> ACTIONS (one to many)