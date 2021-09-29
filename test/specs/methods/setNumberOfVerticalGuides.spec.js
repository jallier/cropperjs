describe('setNumberOfVerticalGuides (method)', () => {
  it('should change the number of vertical guides to `1`', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      ready() {
        const { options } = cropper;

        expect(options.numberOfVerticalGuides).to.equal(2);
        cropper.setNumberOfVerticalGuides(1);
        expect(options.numberOfVerticalGuides).to.equal(1);
        done();
      },
    });
  });

  it('should change the number of vertical guides to 0', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      ready() {
        const { options } = cropper;

        expect(options.numberOfVerticalGuides).to.equal(2);
        cropper.setNumberOfVerticalGuides(0);
        expect(options.numberOfVerticalGuides).to.equal(0);
        done();
      },
    });
  });

  it('should not change the number of vertical guides from bad input', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      ready() {
        const { options } = cropper;

        expect(options.numberOfVerticalGuides).to.equal(2);
        cropper.setNumberOfVerticalGuides('string');
        expect(options.numberOfVerticalGuides).to.equal(2);
        done();
      },
    });
  });
});
