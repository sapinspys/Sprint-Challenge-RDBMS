exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.text("description").notNullable();

      tbl.boolean("complete").defaultTo(false);
    })

    .createTable("actions", tbl => {
      tbl.increments();

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.text("description").notNullable();

      tbl.text("notes");

      tbl.boolean("complete").defaultTo(false);
    })

    .createTable("contexts", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })

    .createTable("action_contexts", tbl => {
      tbl.increments();

      tbl
        .integer("action_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("actions")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("context_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("contexts")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  // tables with FK must be removed before the referenced table is removed
  return knex.schema
    .dropTableIfExists("action_contexts")
    .dropTableIfExists("contexts")
    .dropTableIfExists("actions")
    .dropTableIfExists("projects");
};
