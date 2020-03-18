const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db('schemes');
};

function findById(id) {
  return db('schemes').where({ id }).first();
};

function findSteps(id) {
  return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where({ scheme_id: id })
    .orderBy('steps.step_number');
};

function add(scheme) {
  return db('schemes').insert(scheme)
    .then(id => {
      return findById(id[0]);
    });
};

// Write
function addStep(step, scheme_id) {
  return
};

function update(changes, id) {
  return db('schemes').where({ id }).update(changes)
    .then(count => {
      console.log(`Updated ${count} records`);
      return findById(id);
    });
};

// Fix to return deleted object
function remove(id) {
  const deletedScheme = findById(id);
  console.log(deletedScheme);

  return db('schemes').where({ id }).del()
    .then(count => {
      console.log(`Deleted ${count} records`);
      return deletedScheme;
    });
};