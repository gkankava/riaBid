import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import bgSub from "../../assets/bg/bg-sub.jpg";
import { subscribe } from "../../services/dashboardService";

function Subscribe() {
  const [email, setEmail] = useState("");
  const subscribeMutation = useMutation(subscribe, {
    onMutate: (variables) => {
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      toast.error(error.context);
    },
    onSuccess: (data, variables, context) => {
      toast.dark("You successfully subscribed", {
        progress: undefined,
        hideProgressBar: true,
      });
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
      setEmail("");
    },
  });
  return (
    <div className="container subscribe">
      <div className="wrapper">
        <p>
          Subscribe to our newsletter and receive exclusive offers every week
        </p>
        <div className="input-wrapper">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "1vw" }}
            type="email"
            placeholder="Email"
          />
          <button
            onClick={() => subscribeMutation.mutate({ email })}
            className="btn-placebid"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
