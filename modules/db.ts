// Purpose: This file is used to connect to the database and export the models to be used in the application.

import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from '../knexfile';

import Location from '../models/location';
import Staff from '../models/staff';

const knex = Knex(knexConfig); // Create a Knex instance using the provided configuration
Model.knex(knex); // Bind the Knex instance to the Objection.js Model class

export {
  Location,
  Staff,
}