import React from "react";
import { userProvider } from "../../store/store";

import { GrClose } from "react-icons/gr";

function Modal({ type, setAuthModalActive }) {
  const { currentUser, setCurrentUser } = userProvider();
  const _closeModal = () => {
    setAuthModalActive({
      login: false,
      register: false,
    });
  };

  return (
    <div className="auth-modal">
      <div className="modal-container">
        <div className="close-btn" onClick={() => _closeModal()}>
          <GrClose />
        </div>
        {type.login ? (
          <>
            <h3>Log In</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <div className="input-container">
              <input type="text" name="" id="" placeholder="E-mail" />
              <input type="password" name="" id="" placeholder="Password" />
              <div className="action-wrapper">
                <div className="keep-wrapper">
                  <input type="checkbox" name="" id="" />
                  <span>Keep me signed in</span>
                </div>
                <div className="forget">Forgot password?</div>
              </div>
            </div>
            {/*<div className="modal-btn-container">
              <button
                className="btn btn-fb"
                onClick={() => {
                  setCurrentUser({
                    isAuthenticated: true,
                    token: "1",
                  });
                  _closeModal();
                }}
              >
                Facebook
              </button>
              <button
                className="btn btn-gmail"
                onClick={() => {
                  setCurrentUser({
                    isAuthenticated: true,
                    token: "1",
                  });
                  _closeModal();
                }}
              >
                G mail
              </button>
              </div>*/}
            <button
              className="btn-signup"
              onClick={() => {
                setCurrentUser({
                  isAuthenticated: true,
                  token: "1",
                });
                _closeModal();
              }}
            >
              Sign In
            </button>
            <p className="href-signup">
              Not a member yet?{" "}
              <strong
                onClick={() =>
                  setAuthModalActive({ login: false, register: true })
                }
              >
                Sign Up
              </strong>
            </p>
          </>
        ) : (
          <>
            <h3>Create an account</h3>
            <div className="input-container">
              <div className="wrapper">
                <input type="radio" name="type" id="option-1" defaultChecked />
                <input type="radio" name="type" id="option-2" />
                <input type="radio" name="type" id="option-3" />
                <input type="radio" name="type" id="option-4" />
                <label htmlFor="option-1" className="option option-1">
                  <span>Buyer</span>
                </label>
                <label htmlFor="option-2" className="option option-2">
                  <span>Artist</span>
                </label>
                <label htmlFor="option-3" className="option option-3">
                  <span>Seller</span>
                </label>
                <label htmlFor="option-4" className="option option-4">
                  <span>Lander</span>
                </label>
              </div>
              <input type="text" name="" id="" placeholder="First Name" />
              <input type="text" name="" id="" placeholder="Last Name" />
              <input type="text" name="" id="" placeholder="E-mail" />
              <input type="password" name="" id="" placeholder="Password" />
              <div className="wrapper">
                <input type="radio" name="legal" id="option-5" defaultChecked />
                <input type="radio" name="legal" id="option-6" />
                <label htmlFor="option-5" className="option option-5">
                  <span>Physical</span>
                </label>
                <label htmlFor="option-6" className="option option-6">
                  <span>Legal</span>
                </label>
              </div>
              <div className="keep-wrapper-signup">
                <input type="checkbox" name="" id="" />
                <span className="terms-span">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </div>
            </div>
            <button
              className="btn-signup"
              onClick={() => {
                setCurrentUser({
                  isAuthenticated: true,
                  token: "1",
                });
                _closeModal();
              }}
            >
              Sign Up
            </button>
            <p className="href-signup">
              Are you already a member?{" "}
              <strong
                onClick={() =>
                  setAuthModalActive({ login: true, register: false })
                }
              >
                Sign In
              </strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
