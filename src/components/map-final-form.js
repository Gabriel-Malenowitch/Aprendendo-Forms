/* eslint-disable react/prop-types */
import { Form, Field,} from "react-final-form";


const list = ["a", "b", "c", "d", "e", "f"];

const Condition = ({ when, is, children }) => (
	<>
		<Field name={when}>
			{
				( { input: { value } } )=> (
					<>
						{value === is ? children : null}
					</>
				)
			}
		</Field>
	</>
);

export function MapFinalForm(){

	


	return (
		<>
			<Form 
				onSubmit={(value) => { 
					console.log(value);
				}}

				validate={(value) => { 
					console.log(value);
					const errors = {};
					if(!value.anyThing){
						errors.anyThing = "Este campo é obrigatório";
					}
					console.log(errors);

					return errors;
				}}

				

				render={(props)=>{
					return (
						<form onSubmit={props.handleSubmit}>
							<div>
								<label>
									<Field 
										name="options"
										component="input"
										type="radio"
										value="the another option"
									/>
								The another option
								</label>

								<label>
									<Field 
										name="options"
										component="input"
										type="radio"
										value="alphabet"
									/>

								Alphabet
								</label>

								<label>
									<Field 
										name="cleiton"
										component="input"
										type="checkbox"
									/>
								Cleiton!
								</label>

							</div>

							<div>
								<Condition when="options" is="the another option">
									<Field name="anyThing">
										{
											( input ) => (
												<input {...input} type="text" placeholder="Write something here : )"/>
											)
										}
									</Field>
								</Condition>


								<Condition when="options" is="alphabet">
									<Field 
										name="alphabetical things" 
										component="select">

										<option />
										{
											list.map( item => (
												<option key={item} value={item}>
													{item}
												</option>
											))
										
										}
									</Field>
								</Condition>

								<Condition when="cleiton" is={true}>
									<Field name="anyThing">
										{
											( {input, meta} ) => (
												<>
													<input {...input} type="text" placeholder="Write something here : )"/>
													{meta.error && meta.touched && <span>{meta.error}</span>}
												</>
											)
										}
									</Field>
								</Condition>


								<Field name="checkbox">
									{
										( { input: { value } } )=> (
											<>
												{value === true ? (
													<Field name="anyThing">
														{
															( input ) => (
																<input {...input} type="text" placeholder="Write something here : )"/>
															)
														}
													</Field>
												) : null}
											</>
										)
									}
								</Field>
							</div>

							<button type="submit" onClick={props.form.reset}>Submit</button>
						</form>
					);}}
				
			/>
		</>
	);
}

