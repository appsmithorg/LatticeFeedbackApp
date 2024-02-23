export default {
  rteDefaultValue: "",
	timerId: null,
  addQuestion (question)
  {
    const currentValue = this.rteDefaultValue;
    this.rteDefaultValue = currentValue + `<p>${question}</p>`;
  },

  setDefaultValue(value)
  {
    // debounced write of the current value

    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    this.timerId = setTimeout(() => {
      this.rteDefaultValue = value;
      this.timerId = null;
    }, 200);

  }
}