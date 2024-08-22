export default function handler(req, res) {
    const projects = {
      ongoing: [
        "https://i.ibb.co/g9hg4xR/design1.png",
        "https://i.ibb.co/KV7jKy6/p12.png"
      ],
      completed: [
        "https://i.ibb.co/nk3twp0/p22.png",
        "https://i.ibb.co/BCRNrp2/p2.png"
      ],
      upcoming: [
        "https://i.ibb.co/KVvJT85/p3img.png"
      ],
    };
  
    res.status(200).json(projects);
  }
  