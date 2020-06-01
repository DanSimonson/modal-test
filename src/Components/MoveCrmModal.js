import React, { useState, useReducer, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
//import { Textfield } from "@monsantoit/element-react";
import axios from "axios";
//import DisplayMovecrmModal from "../Modal/MovecrmModal";
//import useModal from "../Modal/useModal";
//import useModal from "./useModal";
import useModalTwo from "./useModalTwo";
import DisplayCrmModal from "./DisplayCrmModal";
//import Cookies from "js-cookie";
//import { crmMoveContext } from "../ContextManage/crmMoveContext";
import { crmMoveContext } from "./crmMoveContext";
//import { ACC_DETAILS_URL } from '../../utils/config'
/*import {
  Drawer,
  DrawerContent,
  List,
  ListItem,
  Textfield,
  IconButton,
  Icon,
  CircularProgress,
} from "@monsantoit/element-react";*/

const initialState = {
  loading: true,
  error: "",
  moveData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        moveData: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        moveData: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

export default function MoveCrmModal({ isShowing, hide, data }) {
  const [moveData, dispatch] = useReducer(reducer, initialState);
  const [modalValue, setModalValue] = useState("");
  const { isShowingTwo, toggleTwo } = useModalTwo();
  /*let headersVal = {
        "Content-Type": "application/json",
    };
    if (process.env.NODE_ENV === "production") {
        headersVal = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Cookies.get("CAM-360-CRM-UI"),
        };
    }*/

  function handleTextChange(e) {
    //console.log('in handleTextChange')
    setModalValue(e.target.value);
    //console.log('modalValue; ', modalValue)
  }
  const getCrmData = async (e) => {
    /*const crmUrl = ACC_DETAILS_URL;
        //crmSourceId comes from the value in input field/ can come from route params(see CrmNameDetails)
        const result = async () => await axios.post(
            crmUrl,
            { source: "C360-DATA-ASSET", sourceId: 'afcee8eb-3752-4426-885d-32c8c9ee829f' },
            {
                headers: headersVal,

            }
        );
        console.log('source id: ', result)*/

    let tempData = [
      {
        name: "Bob Parker",
        CRMID: "afcee8eb-3752-4426-885d-32c8c9ee829f",
        address: "7429 Syracuse Ave",
        city: "Fairmont",
        state: "WV",
        zipcode: "28895",
      },
    ];
    setTimeout(() => {
      setModalValue(tempData);
      dispatch({ type: "FETCH_SUCCESS", payload: tempData });
    }, 2000);
  };

  //console.log('source id: ', cr)
  console.log("moveData: ", moveData);
  return (
    <crmMoveContext.Provider value={moveData}>
      <div>
        {isShowing
          ? ReactDOM.createPortal(
              <React.Fragment>
                <div className="modal-overlay-move" />
                <div
                  onClick={hide}
                  className="modal-wrapper-move"
                  aria-modal
                  aria-hidden
                  tabIndex={-1}
                  role="dialog"
                >
                  <div className="modal-move">
                    <div className="modal-header-move">
                      <button
                        type="button"
                        className="modal-close-button-move"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span onClick={hide} aria-hidden="true">
                          &times;
                        </span>
                      </button>
                    </div>
                    <div className="centerDiv">
                      <div className="wrapperDiv">
                        <h1>Search CRM</h1>
                        <input
                          type="textfield"
                          className=""
                          filled
                          //onClick={() => { func1(); func2();}}
                          onChange={handleTextChange}
                          onBlur={(event) => {
                            getCrmData();
                            toggleTwo(event);
                          }}
                          value={modalValue}
                          //counter
                          maxLength={40}
                        />
                      </div>
                      {/** move crm modal : data={data}*/}
                      <DisplayCrmModal
                        isShowingTwo={isShowingTwo}
                        hide={toggleTwo}
                      />
                      {/*<MovecrmModal isShowing={isShowing} hide={toggle} data={data} />*/}
                    </div>
                  </div>
                </div>
              </React.Fragment>,
              document.body
            )
          : null}
      </div>
    </crmMoveContext.Provider>
  );
}
/*<crmMoveContext.Provider value={moveData}>*/
/*</crmMoveContext.Provider>*/
