const fetchData = require ("./async");


it('should return correct todo', async () =>{
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
});


it('should return correct todo', async () => {
    try {
      const todo = await fetchData(1);
      console.log('Fetched todo:', todo); 
      expect(todo.id).toBe(1);
    } catch (error) {
      console.error('Error fetching data:', error); 
      throw error; 
    }
  });
