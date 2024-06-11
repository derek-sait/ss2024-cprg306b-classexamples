"use client"

import { useState } from "react";
import ContactCard from "./contact-card";
import contactData from "./contacts-info.json";

export default function ContactList() {
  // map the JSON data to an array
  let contactArray = contactData.map((contact) => ({ ...contact }));

    let [filter, setFilter] = useState("all");
    let [sort, setSortBy] = useState();

    if( filter != "all" ){
        contactArray = contactArray.filter(
            (contact) => contact.type === filter
        );
    }

    const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <section>
      <div className="flex mb-5 px-10 py-5 bg-blue-300">
        <div className="flex-1">
          <label>Filter By:</label>
          <select onChange={ (event) => setFilter(event.target.value) }>
            <option value="all">All Contacts</option>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className="flex-1">
          <label>Sort By:</label>
          <select>
            <option>First Name</option>
            <option>Last Name</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {contactArray.map((contact) => (
          <ContactCard contactObj={contact} />
        ))}
      </div>

    </section>
  );
}
