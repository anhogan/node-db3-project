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

// Write
function findSteps(id) {
  return
};

// Fix to return full object
function add(scheme) {
  return db('schemes').insert(scheme);
};

// Write
function addStep(step, scheme_id) {
  return
};

// Fix to return updated object
function update(changes, id) {
  return db('schemes').where({ id }).update(changes);
};

// Fix to return deleted object
function remove(id) {
  return db('schemes').where({ id }).del();
};