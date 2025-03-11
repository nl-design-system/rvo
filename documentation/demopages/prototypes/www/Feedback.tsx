import { Button, Checkbox, Fieldset, Icon, LayoutFlow, TextareaField, TextInputField } from '@nl-rvo/components';
import React, { useState } from 'react';

const Feedback = () => {
  const [isFeedbackFormVisible, setIsFeedbackFormVisible] = useState(false);
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [isContactQuestionVisible, setIsContactQuestionVisible] = useState(false);
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isNotFoundTextareaVisible, setIsNotFoundTextareaVisible] = useState(false);
  const [isMakkelijkVisible, setIsMakkelijkVisible] = useState(false);
  const [isHoeMakkelijkTextareaVisible, setIsHoeMakkelijkTextareaVisible] = useState(false);
  const [isInformatieGevondenIngevuld, setIsInformatieGevondenIngevuld] = useState(false);

  const handleFeedbackButtonClick = () => {
    setIsFeedbackFormVisible(true);
  };

  const handleRadioButtonChange = (event) => {
    setIsInformatieGevondenIngevuld(true);
    if (event.target.value === 'Ja') {
      setIsTextareaVisible(true);
      setIsContactQuestionVisible(true);
      setIsNotFoundTextareaVisible(false);
      setIsMakkelijkVisible(true);
    } else {
      setIsTextareaVisible(true);
      setIsContactQuestionVisible(true);
      setIsEmailVisible(false);
      setIsNotFoundTextareaVisible(true);
      setIsMakkelijkVisible(false);
    }
  };

  const handleMakkelijkRadioButtonChange = (event) => {
    if (['Geen mening', 'Moeilijk', 'Heel moeilijk'].includes(event.target.value)) {
      setIsHoeMakkelijkTextareaVisible(true);
    } else {
      setIsHoeMakkelijkTextareaVisible(false);
    }
  };

  const handleContactRadioButtonChange = (event) => {
    if (event.target.value === 'Ja') {
      setIsEmailVisible(true);
    } else {
      setIsEmailVisible(false);
    }
  };

  return (
    <body className="rvo-theme">
      <main className="rvo-max-width-layout rvo-max-width-layout--lg rvo-padding-block-end--3xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
        <div className="rvo-feedback rvo-margin-block-start--3xl">
          <LayoutFlow row={true} wrap={true} gap="sm" justifyContent="center">
            <Icon icon="tekstballon-met-hart" size="2xl" />
            <em className="rvo-text--xl">Bent u tevreden over deze pagina?</em>
            <span className="rvo-rhs-update-component">
              <Button kind="secondary" onClick={handleFeedbackButtonClick}>
                Geef uw mening
              </Button>
            </span>
          </LayoutFlow>
          {isFeedbackFormVisible && (
            <div className="rvo-feedback__form rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--md">
              <Fieldset legend="">
                <div
                  role="gevonden"
                  aria-labelledby="gevonden-label"
                  className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                >
                  <div className="rvo-form-field__label">
                    <label className="rvo-label" id="gevonden-label" htmlFor="gevonden">
                      Heeft u de informatie gevonden die u zocht?
                    </label>
                  </div>
                  <div className="rvo-radio-button__group">
                    <label className="rvo-radio-button" htmlFor="gevonden-ja">
                      <input
                        id="gevonden-ja"
                        name="gevonden"
                        type="radio"
                        className="utrecht-radio-button"
                        value="Ja"
                        onChange={handleRadioButtonChange}
                      />
                      Ja
                    </label>
                    <label className="rvo-radio-button" htmlFor="gevonden-nee">
                      <input
                        id="gevonden-nee"
                        name="gevonden"
                        type="radio"
                        className="utrecht-radio-button"
                        value="Nee"
                        onChange={handleRadioButtonChange}
                      />
                      Nee
                    </label>
                  </div>
                </div>
                {isMakkelijkVisible && (
                  <div
                    role="makkelijk"
                    aria-labelledby="makkelijk-label"
                    className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                  >
                    <div className="rvo-form-field__label">
                      <label className="rvo-label" id="makkelijk-label" htmlFor="makkelijk">
                        Hoe makkelijk was het om deze informatie te vinden?
                      </label>
                    </div>
                    <div className="rvo-radio-button__group">
                      <label className="rvo-radio-button" htmlFor="makkelijk-heel">
                        <input
                          id="makkelijk-heel"
                          name="makkelijk"
                          type="radio"
                          className="utrecht-radio-button"
                          value="Heel makkelijk"
                          onChange={handleMakkelijkRadioButtonChange}
                        />
                        Heel makkelijk
                      </label>
                      <label className="rvo-radio-button" htmlFor="makkelijk-makkelijk">
                        <input
                          id="makkelijk-makkelijk"
                          name="makkelijk"
                          type="radio"
                          className="utrecht-radio-button"
                          value="Makkelijk"
                          onChange={handleMakkelijkRadioButtonChange}
                        />
                        Makkelijk
                      </label>
                      <label className="rvo-radio-button" htmlFor="makkelijk-geen-mening">
                        <input
                          id="makkelijk-geen-mening"
                          name="makkelijk"
                          type="radio"
                          className="utrecht-radio-button"
                          value="Geen mening"
                          onChange={handleMakkelijkRadioButtonChange}
                        />
                        Geen mening
                      </label>
                      <label className="rvo-radio-button" htmlFor="makkelijk-moeilijk">
                        <input
                          id="makkelijk-moeilijk"
                          name="makkelijk"
                          type="radio"
                          className="utrecht-radio-button"
                          value="Moeilijk"
                          onChange={handleMakkelijkRadioButtonChange}
                        />
                        Moeilijk
                      </label>
                      <label className="rvo-radio-button" htmlFor="makkelijk-heel-moeilijk">
                        <input
                          id="makkelijk-heel-moeilijk"
                          name="makkelijk"
                          type="radio"
                          className="utrecht-radio-button"
                          value="Heel moeilijk"
                          onChange={handleMakkelijkRadioButtonChange}
                        />
                        Heel moeilijk
                      </label>
                    </div>
                  </div>
                )}
                {isHoeMakkelijkTextareaVisible && (
                  <TextareaField label="Hoe kunnen wij dit makkelijker maken?"></TextareaField>
                )}
                {isNotFoundTextareaVisible && <TextareaField label="Wat heeft u niet gevonden?"></TextareaField>}
                {isTextareaVisible && (
                  <TextareaField label="Wilt u verder nog iets delen over onze website?"></TextareaField>
                )}
                {isContactQuestionVisible && (
                  <div
                    role="contact-opnemen"
                    aria-labelledby="contact-opnemen-label"
                    className="utrecht-form-field utrecht-form-field--text rvo-form-field"
                  >
                    <div className="rvo-form-field__label">
                      <label className="rvo-label" id="contact-opnemen-label" htmlFor="contact-opnemen">
                        Mogen wij contact met u opnemen over uw feedback?
                      </label>
                    </div>
                    <div className="rvo-radio-button__group">
                      <label className="rvo-radio-button" htmlFor="contact-opnemen-ja">
                        <input
                          id="contact-opnemen-ja"
                          name="contact-opnemen"
                          type="radio"
                          className="utrecht-radio-button"
                          value="Ja"
                          onChange={handleContactRadioButtonChange}
                        />
                        Ja
                      </label>
                      <label className="rvo-radio-button" htmlFor="contact-opnemen-nee">
                        <input
                          id="contact-opnemen-nee"
                          name="contact-opnemen"
                          type="radio"
                          className="utrecht-radio-button"
                          value="Nee"
                          onChange={handleContactRadioButtonChange}
                        />
                        Nee
                      </label>
                    </div>
                  </div>
                )}
                {isEmailVisible && (
                  <div className="rvo-email">
                    <TextInputField type="email" label="Uw e-mailadres" name="email"></TextInputField>
                    <div className="rvo-padding-block-end--lg">
                      <Checkbox name="klantenpanel" label="Ik wil mij aanmelden voor het klantenpanel."></Checkbox>
                    </div>
                  </div>
                )}
                {isInformatieGevondenIngevuld && <Button kind="primary">Verstuur feedback</Button>}
              </Fieldset>
            </div>
          )}
        </div>
      </main>
    </body>
  );
};

export default Feedback;
