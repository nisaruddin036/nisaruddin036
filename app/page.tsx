"use client"

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  return (
    <main className="flex min-h -screen flex-col items-center justify-between p-24">
      <h1 className="text-center pt-3 text-secondary">Example Form</h1>
        <div className="className='row mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className='bg-white rounded p-4 shadow-md'>
            <div className='form-group mb-3'>
              <label htmlFor= 'Name' className="text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onChange={() => {
                    trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className='form-group mb-3'>
              <label htmlFor= 'Age' className="text-sm font-medium text-gray-700">Age:</label>
              <input
                type="text"
                className={`form-control ${errors.age && "invalid"}`}
                {...register("age", {
                  required: "Age is Required",
                  min: {
                    value: 13,
                    message: "Minimum Required age is 13",
                  },
                  max: {
                    value: 65,
                    message: "Maximum allowed age is 65",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  }
                })}
                onChange={() => {
                    trigger("age");
                }} 
              />
              {errors.age && (
                <small className="text-danger">{errors.age.message}</small>
              )}
            </div>
            <div className='form-group mb-3'>
              <label htmlFor= 'Email' className="text-sm font-medium text-gray-700">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onChange={() => {
                    trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className='form-group mb-3'>
              <label htmlFor= 'phone' className="text-sm font-medium text-gray-700">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onChange={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className='form-group mb-3'>
              <label htmlFor= 'Message' className="text-sm font-medium text-gray-700">Message:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Message is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
               })}
               onChange={() => {
                trigger("message");
              }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <input
              type="submit"
              className="bg-blue-500 text-white font-semibold rounded p-1 cursor-pointer"
              value="Send message"
            />
          </form>
        </div>
    </main>
  );
}

export default App;