'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('countries', [
      {
        name: 'Burgundy',
        major: true,
        region: 'Western Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Castile',
        major: true,
        region: 'Western Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'England',
        major: true,
        region: 'Western Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'France',
        major: true,
        region: 'Western Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Portugal',
        major: true,
        region: 'Western Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Austria',
        major: true,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Brandenburg',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Denmark',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Genoa',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Hesse',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Naples',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Sweden',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Switzerland',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Venice',
        major: false,
        region: 'Central Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Hungary',
        major: true,
        region: 'Eastern Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Lithuania',
        major: true,
        region: 'Eastern Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Muscovy',
        major: true,
        region: 'Eastern Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Poland',
        major: true,
        region: 'Eastern Europe',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Afghanistan',
        major: false,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Mamluks',
        major: true,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Morocco',
        major: false,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Ottomans',
        major: true,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Qara Qoyunlu',
        major: false,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Transoxiana',
        major: false,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Tunis',
        major: false,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Uzbek',
        major: false,
        region: 'Near East',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Butua',
        major: false,
        region: 'Africa',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Ethiopia',
        major: false,
        region: 'Africa',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Kongo',
        major: false,
        region: 'Africa',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Mali',
        major: false,
        region: 'Africa',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Songhai',
        major: false,
        region: 'Africa',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Ayutthaya',
        major: false,
        region: 'Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Bahmanis',
        major: true,
        region: 'Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Bengal',
        major: false,
        region: 'Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Mewar',
        major: false,
        region: 'Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Sirhind',
        major: false,
        region: 'Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Vijayanagar',
        major: true,
        region: 'Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'JianZhou',
        major: false,
        region: 'East Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Shun',
        major: false,
        region: 'East Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Wu',
        major: false,
        region: 'East Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: 'Yue',
        major: false,
        region: 'East Asia',
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('countries', null, {});
  }
};
