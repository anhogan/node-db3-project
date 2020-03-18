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
      return findById(id);
    });
};

// Fix to return deleted object
function remove(id) {
  return db('schemes').where({ id }).del();
};