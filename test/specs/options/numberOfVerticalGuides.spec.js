describe('number of vertical guides (option)', () => {
  it('should show the correct number of vertical guides', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      numberOfVerticalGuides: 3,
      ready() {
        // Because there should be one extra span partition than the number of vertical lines
        expect(Array.from(cropper.cropper.querySelectorAll('.dashed-v'))).to.have.lengthOf(4);
        done();
      },
    });

    expect(cropper.options.numberOfVerticalGuides).to.equal(3);
  });
});
