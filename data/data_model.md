### Data Model

1. Identify the entities (tables):
- PROJECTS
- ACTIONS
- CONTEXTS

2. Identify the attributes (columns):
- PROJECTS
  - id: int, pk, autoinc
  - name: varchar, unique, not null
  - description: text, not null
  - complete: boolean, default to false

- ACTIONS
  - id: int, pk, autoinc
  - project_id: int, FK refs id in PROJECTS
  - description: text, not null
  - notes: text
  - complete: boolean, default to false

- ACTIONS/CONTEXTS
  - id: int, pk, autoinc
  - action_id: int, FK refs id in ACTIONS
  - context_id: int, FK refs id in CONTEXTS

- CONTEXTS
  - id: int, pk, autoinc
  - name: varchar, unique, not null

3. Identify the relationships:
- PROJECTS <> ACTIONS (one to many)
- ACTIONS <> CONTEXTS (many to many, needs a third table)
