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

function addStep(step, scheme_id) {
  const newStep = {
    scheme_id: scheme_id,
    step_number: step.step_number,
    instructions: step.instructions
  };

  return db('steps').insert(newStep)
    .then(id => {
      return findSteps(scheme_id);
    });
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
  return db('schemes').where({ id }).del()
    // .then(count => {
    //   console.log(`Deleted ${count} records`);
    //   return json(deletedScheme);
    // });
};