const motivations = [
  {
    id: "1",
    author: "joe rogan",
    description: "About life with joe rogan",
    link: "www.youtube.com/ksjfosd3432jk"
  },
  {
    id: "2",
    author: "jamie foxx",
    description: "Jamie Foxx extreme",
    link: "www.youtube.com/ksjfosd3432jk"
  },
  {
    id: "3",
    author: "Brand Russell",
    description: "ARt of Whining",
    link: "www.youtube.com/ksjfosd3432jk"
  }
];

class MotivationApi {
  static getAllMotivations() {
    return motivations;
  }
}

export default MotivationApi;
