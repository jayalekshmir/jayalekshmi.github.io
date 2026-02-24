function Contact() {
  return (
    <section className="max-w-[1440px] mx-auto my-4 lg:my-8 flex flex-col items-center justify-center text-left p-2 lg:p-8">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch: Ways to Connect with Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:jayalekshmirajeswarijoy@gmail.com`}>
								jayalekshmirajeswarijoy@gmail.com
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. 
							Thanks again for your interest, and I look forward
							to hearing from you!
      </div>
    </section>
  );
}

export default Contact;
