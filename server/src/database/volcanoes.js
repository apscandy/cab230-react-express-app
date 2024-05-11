const database = require("../../configurations/database")

async function getCountries() {
    const data = await database("data").distinct("country");
    return data.map((item) => item.country);
  }
  
  async function getVolcanoes(country) {
    const data = database("data")
      .where({ country: country })
      .select("id", "name", "country", "region", "subregion");
    return data;
  }
  
  async function getVolcanoByID(id) {
    const data = database("data")
      .where({ id: id })
      .select(
        "id",
        "name",
        "country",
        "region",
        "subregion",
        "last_eruption",
        "summit",
        "elevation",
        "latitude",
        "longitude"
      );
    return data;
  }
  
  async function getVolcanoByIDProtected(id) {
      const data = database("data")
        .where({ id: id })
        .select();
      return data;
    }
  
module.exports = {
  getCountries: getCountries,
  getVolcanoes: getVolcanoes,
  getVolcanoByID: getVolcanoByID,
  getVolcanoByIDProtected: getVolcanoByIDProtected
};
