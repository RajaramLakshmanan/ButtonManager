class ButtonManager {
    buttonCount = 0
  constructor() {
    this.buttonCount = 0;
  }

  createButton(text,onClick,styles = {}) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    
    // Apply custom styles
    Object.assign(button.style, styles);
    
    return button;
  }

  addButtonToPage(text, onClick, styles = {}, parent = document.body) {
    const button = this.createButton(text, onClick, styles);
    parent.appendChild(button);
    this.buttonCount++;
    return button;
  }

  getButtonCount() {
    return this.buttonCount;
  }
}

// Export the library
export default new ButtonManager();