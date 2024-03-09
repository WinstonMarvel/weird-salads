import { Model } from 'objection';

/**
 * Represents the Location model for the salad bar in the application.
 * This model is used to interact with the 'locations' table in the database.
 */
class Location extends Model {
  /**
   * The name of the table in the database associated with this model.
   */
  static tableName = 'locations';

  /**
   * Defines the relationship between the Location and Staff models.
   * Each Location can have multiple Staff members.
   */
  static relationMappings = {
    staff: {
      relation: Model.HasManyRelation,
      modelClass: require('./Staff').default, 
      join: {
        from: 'locations.id',
        to: 'staff.locationId',
      },
    },
  };
}

export default Location;
