"use client";

import { motion } from "framer-motion";

export default function SEOContent({ pkg }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
            "
          >
            Learn More
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900

              lg:text-5xl
            "
          >
            Everything You Should Know About
            <br />
            {pkg.name}
          </h2>

          <div
            className="
              prose
              prose-slate
              mt-12
              max-w-none
              prose-headings:font-bold
              prose-headings:text-slate-900
              prose-p:text-slate-600
              prose-p:leading-8
              prose-li:text-slate-600
            "
          >
            <h3>Preventive Healthcare Matters</h3>

            <p>
              Regular diagnostic testing plays an important role in
              preventive healthcare. Many medical conditions such as
              diabetes, thyroid disorders, liver disease, kidney
              disease, and cholesterol imbalance develop gradually
              without noticeable symptoms. Routine health screening
              helps identify these conditions early, making treatment
              more effective and reducing the risk of complications.
            </p>

            <p>
              The <strong>{pkg.name}</strong> has been designed to
              provide a comprehensive overview of your health using a
              carefully selected group of laboratory investigations.
              Whether you are planning an annual checkup or monitoring
              an existing condition, this package provides valuable
              insights into your current health status.
            </p>

            <h3>Why Regular Health Checkups Are Important</h3>

            <p>
              Many lifestyle-related diseases progress silently for
              years. Regular testing helps establish baseline values,
              monitor changes over time, and support informed medical
              decisions. It also encourages healthy lifestyle choices
              through early awareness of potential health risks.
            </p>

            <blockquote
              className="
                rounded-2xl
                border-l-4
                border-blue-500
                bg-blue-50
                p-6
                not-italic
              "
            >
              Preventive health screening is often more effective and
              less costly than treating advanced disease.
            </blockquote>

            <h3>What This Package Evaluates</h3>

            <p>
              Depending on the investigations included, this package
              may assess blood health, diabetes markers, liver
              function, kidney function, thyroid hormones, lipid
              profile, vitamin levels, and other essential biomarkers.
              Together, these results provide a broader understanding
              of your overall health.
            </p>

            <ul>
              <li>Blood health and CBC parameters</li>
              <li>Diabetes screening</li>
              <li>Liver function assessment</li>
              <li>Kidney function evaluation</li>
              <li>Heart health indicators</li>
              <li>Thyroid profile</li>
              <li>Vitamin deficiency screening</li>
            </ul>

            <h3>Who Can Benefit?</h3>

            <p>
              Adults above the age of thirty, working professionals,
              senior citizens, individuals with a family history of
              chronic diseases, and anyone interested in preventive
              healthcare can benefit from regular diagnostic screening.
            </p>

            <p>
              Even healthy individuals can use periodic health
              checkups to monitor important biomarkers and identify
              changes before symptoms appear.
            </p>

            <h3>Home Sample Collection</h3>

            <p>
              Home sample collection makes laboratory testing more
              convenient by allowing trained professionals to collect
              samples at your preferred location. This service reduces
              travel time, minimizes waiting, and is particularly
              helpful for elderly patients, busy professionals, and
              families.
            </p>

            <h3>Why Choose Bhangal Clinical Laboratory?</h3>

            <p>
              At Bhangal Clinical Laboratory, we combine experienced
              professionals, quality-focused laboratory practices, and
              modern diagnostic technology to deliver reliable reports
              with patient-focused care. Our goal is to make diagnostic
              services accessible, accurate, and convenient through
              digital reporting and home sample collection.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}