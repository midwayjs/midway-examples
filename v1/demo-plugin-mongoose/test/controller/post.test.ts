// import { app, assert } from 'midway-mock/bootstrap';

// describe('test/controller/post.test.ts', () => {
//   it('should assert config.keys', () => {
//     const pkg = require('../../package.json');
//     assert(app.config.keys.startsWith(pkg.name));
//   });

//   let postid

//   it('should create a post', () => {
//     return (
//       app
//       .httpRequest()
//       .post('/post/create')
//       .send({title: 'test', postContent: 'test content'})
//       .expect(200)
//       .then(response => {
//         assert(response.body >= 0)
//         postid = response.body
//       })
//     )
//   })

//   it('should find a post', () => {
//     return (
//       app
//       .httpRequest()
//       .get('/post/find')
//       .query({id: postid})
//       .expect(200)
//       .then(response => {
//         assert(response.body.title === 'test')
//         assert(response.body.postContent === 'test content')
//       })
//     )
//   })

//   it('should list posts', () => {
//     return (
//       app
//       .httpRequest()
//       .get('/post')
//       .expect(200)
//       .then(response => {
//         assert(response.body.postList.length > 0)
//         assert(response.body.totalCount > 0)
//       })
//     )
//   })

//   it('should update a post', () => {
//     return (
//       app
//       .httpRequest()
//       .post('/post/update')
//       .send({
//         id: postid,
//         updates: {
//           title: 'test-update',
//           postContent: 'test content update'
//         }
//       })
//       .expect(200)
//       .then(response => {
//         assert(response.body === true)
//       })
//     )
//   })

//   it('should soft delete a post', () => {
//     return (
//       app
//       .httpRequest()
//       .post('/post/delete')
//       .send({
//         id: postid,
//       })
//       .expect(200)
//       .then(response => {
//         assert(response.body === true)
//       })
//     )
//   })

//   it('should not get soft deleted post', () => {
//     return (
//       app
//       .httpRequest()
//       .get('/post/find')
//       .query({id: postid})
//       .expect(204)
//     )
//   })
  
//   it('should destroy a post', () => {
//     return (
//       app
//       .httpRequest()
//       .post('/post/destroy')
//       .send({id: postid})
//       .expect(200)
//       .then(response => {
//         assert(response.body === true)
//       })
//     )
//   })
// });
