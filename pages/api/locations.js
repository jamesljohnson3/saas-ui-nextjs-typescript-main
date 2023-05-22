export default function handler(req, res) {
  const markersData = [
    {
      latitude: 35.1796,
      longitude: 129.0756,
      name: 'Busan',
      description: 'The second-largest city in South Korea',
    },
    {
      latitude: -34.9285,
      longitude: 138.6007,
      name: 'Adelaide',
      description: 'The fifth-most populous city in Australia',
    },
    {
      latitude: 33.9416,
      longitude: 67.821,
      name: 'Kabul',
      description: 'The capital of Afghanistan',
    },
    {
      latitude: -31.9505,
      longitude: 115.8605,
      name: 'Perth',
      description: 'The fourth-most populous city in Australia',
    },
    {
      latitude: 3.139,
      longitude: 101.6869,
      name: 'Kuala Lumpur',
      description: 'The capital of Malaysia',
    },
    {
      latitude: -27.471,
      longitude: 153.0234,
      name: 'Gold Coast',
      description: 'A coastal city in Australia',
    },
    {
      latitude: 1.2903,
      longitude: 103.8518,
      name: 'Singapore',
      description: 'A sovereign island city-state in Southeast Asia',
    },
    {
      latitude: -33.8591,
      longitude: 151.2002,
      name: 'Manly',
      description: 'A beach-side suburb of Sydney',
    },
    {
      latitude: 37.78,
      longitude: -122.412,
      name: 'San Francisco',
      description: 'A beautiful city on the West Coast of the United States',
    },
    {
      latitude: 52.52,
      longitude: 13.405,
      name: 'Berlin',
      description: 'A vibrant city in Germany with a rich history',
    },
    {
      latitude: 35.676,
      longitude: 139.65,
      name: 'Tokyo',
      description:
        'The capital city of Japan with a unique blend of traditional and modern culture',
    },
    {
      latitude: -34.6,
      longitude: -58.38,
      name: 'Buenos Aires',
      description:
        'The cosmopolitan capital city of Argentina with a rich cultural heritage',
    },
    {
      latitude: 28.5383,
      longitude: -81.3792,
      name: 'Orlando',
      description:
        'A popular tourist destination in Florida, known for its theme parks and sunny weather',
    },
    {
      latitude: 29.7604,
      longitude: -95.3698,
      name: 'Houston',
      description:
        'The largest city in Texas, known for its diverse culture and booming economy',
    },
    {
      latitude: 33.749,
      longitude: -84.388,
      name: 'Atlanta',
      description:
        'The capital and largest city of Georgia, known for its rich history and modern skyline',
    },
    {
      latitude: 40.7128,
      longitude: -74.006,
      name: 'New York',
      description:
        'The largest city in the United States, known for its cultural and financial influence',
    },
    {
      latitude: 36.7783,
      longitude: -119.4179,
      name: 'California',
      description:
        'The most populous state in the United States, known for its beaches, mountains, and Hollywood',
    },
    {
      latitude: 33.8361,
      longitude: -81.1637,
      name: 'South Carolina',
      description:
        'A southeastern state known for its beaches, historic landmarks, and southern charm',
    },
    {
      latitude: 40.4173,
      longitude: -82.9071,
      name: 'Ohio',
      description:
        'A midwestern state known for its contributions to American history and culture',
    },
    {
      latitude: 25.7823907,
      longitude: -80.2994995,
      name: 'Miami',
      description:
        'A vibrant city on the East Coast of the United States known for its beaches and nightlife',
    },
    {
      latitude: 30.267153,
      longitude: -97.7430608,
      name: 'Austin',
      description:
        'The capital city of Texas with a thriving music scene and a laid-back vibe',
    },
    {
      latitude: 29.7604267,
      longitude: -95.3698028,
      name: 'Houston',
      description:
        'The largest city in Texas known for its oil industry and diverse culinary scene',
    },
    {
      latitude: 33.7490987,
      longitude: -84.3901849,
      name: 'Atlanta',
      description:
        'A major city in the southern United States with a rich history and vibrant culture',
    },
    {
      latitude: 32.776475,
      longitude: -79.9310512,
      name: 'Charleston',
      description:
        'A historic city on the East Coast of the United States known for its architecture and southern charm',
    },
    {
      latitude: 29.9510658,
      longitude: -90.0715323,
      name: 'New Orleans',
      description:
        'A lively city in the southern United States known for its jazz music and Creole cuisine',
    },
    {
      latitude: 40.7128,
      longitude: -74.006,
      name: 'New York City',
      description:
        'The largest city in the United States, located in the northeastern state of New York.',
    },
    {
      latitude: 37.7749,
      longitude: -122.4194,
      name: 'San Francisco',
      description: 'A beautiful city on the West Coast of the United States.',
    },
    {
      latitude: 34.0522,
      longitude: -118.2437,
      name: 'Los Angeles',
      description:
        'The second-largest city in the United States, located in the southwestern state of California.',
    },
    {
      latitude: 29.7604,
      longitude: -95.3698,
      name: 'Houston',
      description:
        'The largest city in the southern state of Texas, known for its oil industry and diverse population.',
    },
    {
      latitude: 30.4383,
      longitude: -84.2807,
      name: 'Tallahassee',
      description: 'The capital city of the southeastern state of Florida.',
    },
    {
      latitude: 32.7767,
      longitude: -96.797,
      name: 'Dallas',
      description:
        'A major city in the southern state of Texas, known for its contributions to the oil and cotton industries.',
    },
    {
      latitude: 33.749,
      longitude: -84.388,
      name: 'Atlanta',
      description:
        'The capital city of the southeastern state of Georgia, known for its rich history and vibrant culture.',
    },
    {
      latitude: 39.962,
      longitude: -83.0007,
      name: 'Columbus',
      description:
        'The capital city of the Midwestern state of Ohio, known for its universities and diverse economy.',
    },
    {
      latitude: 32.7763,
      longitude: -96.7969,
      name: 'Fort Worth',
      description:
        'A major city in the southern state of Texas, known for its contributions to the cattle and oil industries.',
    },
    {
      latitude: 33.8366,
      longitude: -81.1637,
      name: 'Columbia',
      description:
        'The capital city of the southeastern state of South Carolina, known for its historic architecture and southern charm.',
    },
    {
      latitude: 38.9047,
      longitude: -77.0164,
      name: 'Washington D.C.',
      description:
        'The capital city of the United States, located on the East Coast.',
    },
    {
      latitude: -33.9258,
      longitude: 18.4232,
      name: 'Cape Town',
      description: 'The legislative capital of South Africa',
    },
    {
      latitude: 6.5244,
      longitude: 3.3792,
      name: 'Lagos',
      description: 'The economic capital of Nigeria',
    },
    {
      latitude: 15.5007,
      longitude: 32.5599,
      name: 'Khartoum',
      description: 'The capital of Sudan',
    },
    {
      latitude: -1.2921,
      longitude: 36.8219,
      name: 'Nairobi',
      description: 'The capital of Kenya',
    },
    {
      latitude: -33.9249,
      longitude: 18.4241,
      name: 'Johannesburg',
      description: 'The largest city in South Africa',
    },
    {
      latitude: 9.0249,
      longitude: 38.7469,
      name: 'Addis Ababa',
      description: 'The capital of Ethiopia',
    },
    {
      latitude: 4.0407,
      longitude: 9.6922,
      name: 'Douala',
      description: 'The largest city in Cameroon',
    },
    {
      latitude: 36.7529,
      longitude: 3.042,
      name: 'Algiers',
      description: 'The capital of Algeria',
    },
    {
      latitude: 12.65,
      longitude: -8.0,
      name: 'Bamako',
      description: 'The capital of Mali',
    },
    {
      latitude: -4.325,
      longitude: 15.3222,
      name: 'Kinshasa',
      description: 'The capital of the Democratic Republic of Congo',
    },
    {
      latitude: 36.8188,
      longitude: 10.1659,
      name: 'Tunis',
      description: 'The capital of Tunisia',
    },
    {
      latitude: 33.8886,
      longitude: 9.5375,
      name: 'Sousse',
      description: 'A coastal city in Tunisia known for its medina',
    },
    {
      latitude: 14.6928,
      longitude: -17.4467,
      name: 'Dakar',
      description: 'The capital of Senegal',
    },
    {
      latitude: 33.8869,
      longitude: 35.5131,
      name: 'Beirut',
      description: 'The capital of Lebanon',
    },
    {
      latitude: -26.2041,
      longitude: 28.0473,
      name: 'Johannesburg',
      description: 'The largest city in South Africa',
    },
    {
      latitude: 33.9681,
      longitude: -6.8446,
      name: 'Casablanca',
      description: 'The largest city in Morocco',
    },
    {
      latitude: 18.5392,
      longitude: -72.3364,
      name: 'Port-au-Prince',
      description: 'The capital of Haiti',
    },
    {
      latitude: 36.7976,
      longitude: 10.1797,
      name: 'Carthage',
      description: 'An ancient city in Tunisia',
    },
    {
      latitude: -33.9258,
      longitude: 18.4232,
      name: 'Cape Town',
      description: 'The legislative capital of South Africa',
    },
    {
      latitude: 36.8065,
      longitude: 10.1815,
      name: 'Tunis',
      description: 'The capital city of Tunisia',
    },
    {
      latitude: 6.4486,
      longitude: 3.3906,
      name: 'Lagos',
      description:
        'The most populous city in Nigeria and the African continent',
    },
    {
      latitude: -26.2041,
      longitude: 28.0473,
      name: 'Johannesburg',
      description: 'The largest city in South Africa',
    },
    {
      latitude: -1.9403,
      longitude: 29.8739,
      name: 'Kigali',
      description: 'The capital city of Rwanda',
    },
    {
      latitude: 15.3694,
      longitude: 44.191,
      name: "Sana'a",
      description: 'The capital city of Yemen',
    },
    {
      latitude: 9.0574,
      longitude: 7.4898,
      name: 'Abuja',
      description: 'The capital city of Nigeria',
    },
    {
      latitude: 33.8869,
      longitude: 9.5375,
      name: 'Tataouine',
      description: 'A city in Tunisia famous for its Berber dwellings',
    },
    {
      latitude: 36.7783,
      longitude: 3.042,
      name: 'Algiers',
      description: 'The capital city of Algeria',
    },
    {
      latitude: 4.0435,
      longitude: 9.7003,
      name: 'Yaounde',
      description: 'The capital city of Cameroon',
    },
    {
      latitude: -33.9688,
      longitude: 25.6022,
      name: 'Port Elizabeth',
      description: 'A city on the Eastern Cape in South Africa',
    },
    {
      latitude: 9.0778,
      longitude: 7.3986,
      name: 'Kaduna',
      description:
        'A city in Nigeria located in the northern part of the country',
    },
    {
      latitude: 36.8318,
      longitude: 10.1719,
      name: 'Carthage',
      description: 'An ancient city in Tunisia founded in the 9th century BC',
    },
    {
      latitude: -3.3762,
      longitude: 29.3599,
      name: 'Bujumbura',
      description: 'The capital city of Burundi',
    },
    {
      latitude: 33.5908,
      longitude: -7.6188,
      name: 'Casablanca',
      description: 'The largest city in Morocco',
    },
    {
      latitude: 15.3366,
      longitude: 44.2081,
      name: 'Ad Dali',
      description:
        'A city in Yemen located in the southwestern part of the country',
    },
    {
      latitude: 5.3167,
      longitude: -4.0333,
      name: 'Abidjan',
      description: 'The economic capital of Ivory Coast',
    },
    {
      latitude: -1.9522,
      longitude: 30.0605,
      name: 'Gisenyi',
      description: 'A city in Rwanda on the shores of Lake Kivu',
    },
    {
      latitude: 29.3697,
      longitude: 47.9783,
      name: 'Kuwait City',
      description: 'The capital city of Kuwait',
    },
    {
      latitude: 14.6937,
      longitude: -17.4441,
      name: 'Banjul',
      description: 'The capital city of The Gambia',
    },
    // Add more cities here
  ];
  res.status(200).json(markersData);
}
