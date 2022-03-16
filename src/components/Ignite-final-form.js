/* eslint-disable no-unused-vars */
import { Form, Field, FormSpy, useField } from "react-final-form";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


export function Default () {

	return(
		<>
			<Form

				onSubmit={ (data)=>{

					console.log("Data: ", data);

				}}	

				validate={ n => {

					const errors = {};
					errors.userName = "AAA";

					return errors;
				}}

				// eslint-disable-next-line no-unused-vars
				render={({ handleSubmit })=>{

					//console.log("Form Submit: ", FormProps);
					// const { form: MyForm } = FormProps;
					

					return (
						<>
							<form onSubmit={handleSubmit}>
								<Field name="userName">
									{
										(fieldProps)=>{
											//console.log("FieldProps: ", fieldProps);
											const use = useField();
											//console.log(use);

											//console.log("compare use", use);
											//console.log("compare fieldProps", fieldProps);
											//console.log(use == fieldProps);

											console.log(fieldProps.meta.error);

											return (
												<>
													<input {...fieldProps.input} placeholder="User Name" type="text" />
													{fieldProps.meta.error && fieldProps.meta.touched && <span>{fieldProps.meta.error}</span>}

												</>
											);
										}
									}
								</Field>

								<FormSpy 
									// onChange={props=>console.log(props)}
								>
									{
										(probs) => {
											// console.log(probs);
											return (
												<>
													Hello world!
												</>
											);
										}
									}
								</FormSpy>

								<button type="submit">Submit</button>
							</form>
						</>
					);
				}}


			/>
		</>
	);
}