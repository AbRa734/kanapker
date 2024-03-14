import React from 'react';
import { MdSend } from "react-icons/md";

function Page() {
    return (
        <main className="max-w-[1024px] mx-auto px-6">
            <section className="md:flex items-center mt-10">
                <div className="border-gray-400 border-2 min-w-[50%]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9879.476957981533!2d19.4517176!3d51.7537146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34d85d1152f3%3A0xbe75c3beee4bad56!2zUG9saXRlY2huaWthIMWBw7Nkemth!5e0!3m2!1spl!2spl!4v1710447212033!5m2!1spl!2spl"
                        width={"100%"} height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="p-5">
                    <h3 className="text-xl mb-3">Skontaktuj się z nami!</h3>
                    <form>
                        <input
                            type="text"
                            placeholder="Imię i nazwisko"
                            name="name"
                            className="mb-5 focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Adres email"
                            name="email"
                            className="mb-5 focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                            required
                        />
                        <textarea
                            placeholder="Twoja wiadomość"
                            name="message"
                            className="mb-5 focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                            required
                        />
                        <button
                            className="bg-black text-white px-3 py-1.5 rounded-xl flex justify-center items-center"
                            type="submit"
                        >
                            Wyślij wiadomość <MdSend className="ml-5" />
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Page;