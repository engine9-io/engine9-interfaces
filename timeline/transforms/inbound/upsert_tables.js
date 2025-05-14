module.exports = {
  bindings: {
    tablesToUpsert: { path: 'sql.tables.upsert' },
  },
  async transform({
    batch, tablesToUpsert, inputId,
  }) {
    tablesToUpsert.timeline = (tablesToUpsert.timeline || []);
    batch.forEach((o) => {
      if (o.timeline_id) {
        tablesToUpsert.timeline.push({
          id: o.timeline_id,
          ts: new Date(),
          input_id: inputId,
          entry_type_id: o.entry_type_id,
          person_id: o.person_id,
          source_code_id: o.source_code_id,
        });
      }
    });
  },

};
