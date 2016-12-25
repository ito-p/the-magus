import Magus from '../Magus';

it('produce string', () => {
  const frontend = [ 'react', 'vue', 'Angular' ];
  const backend = [ 'ruby', 'node' ];
  const db = [ 'MySQL', 'mongo DB', 'dynamo DB' ];

  const templateData = {
    frontend: '$frontend',
    server: {
      backend: '$backend',
      db: '$db',
    }
  };

  const magus = new Magus({ frontend, backend, db }, templateData);

  const results = magus.produce(product => {
    return product;
  });

  expect(results[0]).toEqual({
    frontend: 'react',
    server: {
      backend: 'ruby',
      db: 'MySQL',
    }
  });

  expect(results[17]).toEqual({
    frontend: 'Angular',
    server: {
      backend: 'node',
      db: 'dynamo DB',
    }
  });
});
