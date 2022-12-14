import React from "react";
import { Formik, Form, Field } from 'formik'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import { useFunding } from "../../context/fundingContext";
import FooterAdmin from "../../components/general/footerAdmin";

export function FundingForm(props) {

    const { createFunding, updateFunding } = useFunding();
    const { postsCat } = useFunding();

    const { getFundingById } = useFunding();
    const [post, setPost] = useState({
        idFunding: "",
        title: "",
        question1: "",
        question2: "",
        question3: "",
        fastDescrption: "",
        description: "",
        fundingImage1: null,
        fundingImage2: null,
        fundingImage3: null,
        fundingVideo: "",
        socialMedia: "",
        category: "",
        idCategory: "",
        goal: "",
        currentGoal: "",
        accountNumber: ""
    });

    const params = useParams();

    useEffect(() => {
        (async () => {
            if (params.id) {
                const post = await getFundingById(params.id);

                setPost({
                    idFunding: post[0].IdFunding,
                    title: post[0].Title,
                    question1: post[0].Question1,
                    question2: post[0].Question2,
                    question3: post[0].Question2,
                    fastDescription: post[0].FastDescription,
                    description: post[0].Description,
                    fundingImage1: post[0].FundingImage1,
                    fundingImage2: post[0].FundingImage2,
                    fundingImage3: post[0].FundingImage3,
                    fundingVideo: post[0].FundingVideo,
                    socialMedia: post[0].SocialMedia,
                    category: post[0].Category,
                    idCategory: post[0].IdCategory,
                    goal: post[0].Goal,
                    currentGoal: post[0].CurrentGoal,
                    accountNumber: post[0].AccountNumber
                });

            }
        })();
    }, [params.id, getFundingById]);

    return (
        <div>
            <div className="container-sm my-2 p-5">
                
                <div className="mb-4">
                    <h2>Crear una campa??a</h2>
                </div>

                <h4>Presentaci??n del proyecto</h4>
                <hr />

                <Formik className="form"
                    initialValues={post}

                    validationSchema={Yup.object({

                    })}

                    onSubmit={async (values, actions) => {
                        if (post.idFunding != "") {
                            const posts = await updateFunding(values);
                            if (posts != null) {
                                window.location.replace('/controlPageAprove')
                            }
                        } else {
                            const posts = await createFunding(values);
                            if (posts != null) {
                                window.location.replace('/controlPageAprove')
                            }
                        }
                    }}

                    enableReinitialize={true}>

                    {({ handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            <section id="first">
                                <div className="row mb-3">
                                    <div className="col  text-secondary">
                                        Escribe un t??tulo y un subt??tulo de forma clara y concisa para transmitir r??pidamente la esencia de tu proyecto. Ambos aparecer??n tanto en la p??gina del proyecto como en la de prelanzamiento.
                                        Tambi??n los ver??n los posibles patrocinadores si tu proyecto aparece en las p??ginas de la categor??a, en los resultados de b??squeda o en los correos electr??nicos que enviamos a nuestra comunidad.
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">T??tulo</label>
                                        <Field name='title' className="form-control" maxLength="300"/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col form-group mb-3 ">
                                        <label className="fw-semibold">Descripcion breve</label>
                                        <Field component="textarea" name='fastDescription' className="form-control" maxLength="300" rows="4" />
                                    </div>
                                    <div className="col form-group ">
                                        <label className="fw-semibold">Descripcion General</label>
                                        <Field component="textarea" name='description' className="form-control" maxlength="1000" rows="4" />
                                    </div>
                                </div>

                                <a className="flex btn btn-success" href="#second">Ir a la siguiente secci??n</a>
                            </section>

                            <section id="second" >
                                <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>
                                <p>Cu??ntale a las personas por qu?? deber??an entusiasmarse con tu proyecto. S?? espec??fico, y a la vez claro y conciso.</p>
                                <div className="form-group  text-secondary">
                                    <h4 className="fw-semibold">Misi??n del creador de la campa??a</h4>
                                    <li><strong>??Cu??l el plan para tu proyecto, y en qu?? margen de tiempo?</strong></li>
                                    <p>Establece un cronograma claro y espec??fico para los patrocinadores.</p>

                                    <li><strong>??Qu?? presupuesto tienes?</strong></li>
                                    <p> Un simple desglose demuestra que has pensado bien las cosas y que tienes un plan razonable, es decir, eres una persona fiable que usar?? los fondos de los patrocinadores de una forma adecuada.
                                    </p>
                                    <li><strong>??Por qu?? este proyecto?</strong></li>
                                    <p>Transmite tu entusiasmo sobre el proyecto a la gente, hazle sentir tu compromiso de llevarlo a cabo.</p>

                                    <Field name='question1' type="text" component="textarea" Style="height:280px;" maxlength="1000" className="form-control" />
                                </div>
                                <a className="flex btn btn-success mt-3" href="#three">Ir a la siguiente secci??n</a>
                            </section>
                            <section id="three">
                                <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>

                                <div className="form-group  text-secondary">
                                    <h4 className="fw-semibold">Visi??n de la campa??a</h4>
                                    <li><strong>??Qu?? quieres crear?</strong></li>
                                    <p>??Cu??ntos m??s detalles, mejor! Incluye bocetos, muestras, prototipos y contagia tu entusiasmo a los patrocinadores.</p>

                                    <li><strong>??C??mo surgi?? la idea para este proyecto?</strong></li>
                                    <p> Cuenta c??mo comenz?? todo y hasta d??nde has llegado en este momento. De esta forma, los patrocinadores pueden entender qu?? tipo de trabajo ofreces y c??mo lo manejas.
                                    </p>

                                    <Field name='question2' type="text" component="textarea" Style="height:360px;" maxlength="1000" className="form-control" />
                                </div>
                                <a className="flex btn btn-success mt-5" href="#four">Ir a la siguiente secci??n</a>
                            </section>

                            <section id="four">
                                <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>

                                <div className="form-group  text-secondary">
                                    <h4 className="fw-semibold">Sobre ti y/o tu equipo de trabajo</h4>
                                    <li><strong>??Qui??n eres?</strong></li>
                                    <p>Pres??ntate. Presenta a tu equipo y trabajos similares que realizaste en el pasado, o mejor a??n: ??muestra unos ejemplos!</p>

                                    <li><strong>Riesgos y desaf??os</strong></li>
                                    <p>S?? honesto acerca de los posibles riesgos y desaf??os del proyecto y c??mo planeas superarlos para completarlo.</p>

                                    <Field name='question3' type="text" component="textarea" Style="height:360px;" maxlength="1000" className="form-control" />
                                </div>
                                <a className="flex btn btn-success mt-5" href="#five">Ir a la siguiente secci??n</a>
                            </section>

                            <section id="five">
                                <div className="mt-5">
                                    <h4>Muestra graficamente la identidad del la campa??a</h4>
                                    <hr />
                                </div>

                                <div className="row">
                                    <div clasNames="form-group mb-5">
                                        <h5 className="fw-semibold">Imagen del Proyecto</h5>
                                        <p className=" text-secondary">
                                            Agrega una imagen que represente claramente tu proyecto y que se vea bien en diferentes tama??os, ya que aparecer?? en la p??gina de tu proyecto, en el sitio web, y (cuando se comparta) en las redes sociales.
                                            Tu imagen debe tener al menos 1024x576 p??xeles. Se recortar?? en una proporci??n de 16:9.
                                            Evita im??genes con banners, distintivos o texto que podr??an ser ilegibles en formatos m??s peque??os o ser penalizados por el algoritmo de Facebook. Adem??s, reducen tus posibilidades de aparecer en la p??gina de inicio y en los boletines de Kickstarter.
                                        </p>
                                        <input name='fundingImage1' type="file" onChange={(e) => setFieldValue('fundingImage1',e.target.files[0]) } className="form-control" />
                                    </div>

                                    <div className="form-group mb-5">
                                        <h5 className="fw-semibold">Producto final</h5>
                                        <p className=" text-secondary"> 
                                            Agrega una imagen ilustrativa de tu prodcuto final
                                        </p>
                                        <input name='fundingImage2' type="file" onChange={(e) => setFieldValue('fundingImage2',e.target.files[0]) } className="form-control" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <h5 className="fw-semibold">Proceso de producci??n</h5>
                                        <p className=" text-secondary">
                                            Agrega una imagen del proceso de produci??n por el cual paso tu producto final.
                                        </p>
                                        <input name='fundingIamge3' type="file" onChange={(e) => setFieldValue('fundingImage3',e.target.files[0]) } className="form-control" />
                                    </div>
                                </div>

                                <a className="flex btn btn-success mt-5" href="#six">Ir a la siguiente secci??n</a>

                            </section>

                            <section id="six">
                                <div className="my-5">
                                    <h4>M??s informaci??n</h4>
                                    <hr />
                                </div>

                                <div className="row">
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Link de la video presentacion de la compa??a</label>
                                        <Field name='fundingVideo' type="text" className="form-control" maxlength="1000" placeholder="https://www.youtube.com/embed/tuVideo" />
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Social media</label>
                                        <p className=" text-secondary">Agrega el link de una red socal de preferencia para una mejor visualizaci??n de la campa??a.</p>
                                        <Field name='socialMedia' type="text" className="form-control" maxlength="250" placeholder="Facebook, Twiter o Instagram" />
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Categoria</label>
                                        <p className=" text-secondary">Elige una categor??a  para ayudar a los patrocinadores a encontrar tu proyecto.</p>
                                        <br />
                                        <Field name="idCategory" className="form-select" component="select">
                                            <option value="0" defaultValue >Elige una categoria</option>
                                            {postsCat.map(postCat => (
                                                <option value={postCat.IdCategory} >
                                                    {postCat.CategoryName}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>
                            </section>
                            <section id="seven">
                                <div className="my-4">
                                    <h4>Planifica y administra las finanzas de tu proyecto</h4>
                                    <hr />
                                </div>

                                <div className="row">
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">N??mero de cuenta</label>
                                        <p className=" text-secondary">Agrega la cuenta corriente donde deseas recibir los fondos.</p>
                                        <Field name='accountNumber' maxlength="30" type="text" className="form-control" />
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Meta a reacudar</label>
                                        <p className=" text-secondary">Define una meta alcanzable que cubra lo que necesitas para completar tu proyecto.
                                            El financiamiento es todo o nada. Si no cumples tu meta, no recibir??s ninguna contribuci??n.</p>
                                        <div className="input-group">
                                            <Field name='goal' maxlength="8"  type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">Bs.</span>
                                            <span className="input-group-text">0.00</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                post.idFunding != "" ?
                                    <div className="text-center">
                                        <div className="card-body mt-4 text-center">
                                            <button type="submit" className="button btn-outline-login">
                                                Modificar campa??a
                                            </button>
                                        </div>
                                    </div> :
                                    <div className="text-center">
                                        <div className="card-body mt-4  text-center">
                                            <button type="submit" className="button btn-outline-login">
                                                Crear campa??a
                                            </button>
                                        </div>
                                    </div>
                            }

                        </Form>
                    )}
                </Formik>
            </div>
            <FooterAdmin/>
        </div>
    )
}