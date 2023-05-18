// http://localhost:3000/api/users

export async function GET(request) {
  // Handle GET request for /api/users
  // Retrieve users from database or any data source

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
  ];

  // Send the Usres as response
  return new Response(JSON.stringify(users));
}
