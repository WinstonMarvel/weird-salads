import { Model } from 'objection';
import Location from './location';

/**
 * Represents the Employee model in the application.
 * This model is used to interact with the 'staff' table in the database.
 */
class Staff extends Model {
  /**
   * The name of the table in the database associated with this model.
   */
  static tableName = 'staff';

  /**
   * Defines the relationship between the Staff and Location models.
   * Staff belongs to one Location.
   */
  static relationMappings = {
    location: {
      relation: Model.BelongsToOneRelation,
      modelClass: Location,
      join: {
        from: 'staff.locationId',
        to: 'locations.id',
      },
    },
  };
}

export default Staff;
