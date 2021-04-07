import axios from "axios";
import "./Author.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchData() {
      console.log("did mount2");
      const learnosityObject = {
        mode: "activity_edit",
        reference: "custom-name-reference-2",
        config: {
          activity_edit: {
            back: false,
            tags_on_create: [
              {
                type: "Institution",
                name: "app",
              },
            ],
            reference: {
              edit: false,
            },
          },
        },
        user: {
          id: "demos-site",
          firstname: "Demos",
          lastname: "User",
          email: "demos@learnosity.com",
        },
      };
      const learnosityResponse = await axios.post(
        "https://apiv2.pa-assessments.aula.education/learnosity/sign",
        {
          serviceType: "author",
          learnosityObject,
        },
        {
          headers: {
            "x-session-token": "r:e0116400a87ac79512555073284b5c24",
          },
        }
      );
      window.LearnosityAuthor.init(learnosityResponse.data.learnosityResponse);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div id="learnosity-author"></div>
    </div>
  );
}

export default App;
