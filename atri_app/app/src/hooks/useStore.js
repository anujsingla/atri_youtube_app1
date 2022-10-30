import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Header_Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Header_TextBox1": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link1": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "custom": {
        "text": "CFP Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Create killer conference submissions in minutes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Start"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/cfpform"
            }
          }
        ]
      }
    }
  },
  "aboutus": {
    "Flex4": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "TextBox4": {
      "custom": {
        "text": "We have collected all the wisdom from the internet on how to create wonderful conference submissions and put that into an intuitive form. CFP Guru helps you structure your idea into a winning format."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Need more help? Set up a free mentorship session with an expert"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "Find Slots"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.google.co.in/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link4": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link5": {
      "custom": {
        "text": "CFP Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link6": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "cfpform": {
    "Flex5": {
      "callbacks": {}
    },
    "Div1": {
      "callbacks": {}
    },
    "Div2": {
      "callbacks": {}
    },
    "Div3": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "TextBox6": {
      "custom": {
        "text": "Abstract generator"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "What kind of conference is this?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": "Conference Kind",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "Input2": {
      "custom": {
        "value": "",
        "placeholder": "Describe the average organizer/jury committee member for this conf?",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox8": {
      "custom": {
        "text": "Describe the average organizer/jury committee member for this conf?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Describe the problem that your submission tries to address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Problem tries to address",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox11": {
      "custom": {
        "text": "CFP GURU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link7": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link8": {
      "custom": {
        "text": "CFP Form",
        "url": "/cfpform"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link9": {
      "custom": {
        "text": "About",
        "url": "/aboutus"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": "Cancel"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
