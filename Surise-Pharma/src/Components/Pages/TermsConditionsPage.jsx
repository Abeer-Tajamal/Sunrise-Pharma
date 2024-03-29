import {Link} from 'react-router-dom'

import Address from "../Reuseable Components/Address/Address";
import useDynamicPageTitle from "../Reuseable Components/DynamicPageTitle/DynamicPageTitle";
import Footer from "../Reuseable Components/Footer/Footer";
import Navbar from "../Reuseable Components/NavBar/NavBar";

const TemsConditionPage = () => {
    useDynamicPageTitle(
        "Patient Terms and Conditions - Sunrise Pharmacy - Your Local Orange Pharmacy"
    );

    return (
        <>
            <Address />
            <Navbar />
            <div className="terms-content">
                <h1>
                    Patient Terms and Conditions
                </h1>

                <p className="revised-date">Revised June 4, 2020</p>

                <p>This website including any content, functionality, and services offered on or through this website and its associated domains and sub-domains (collectively, the <b>“Website”</b>), is operated by Digital Pharmacist Inc., a Delaware Corporation or its affiliate(s) <b>(“Digital Pharmacist”)</b> on behalf of the pharmacy <b>(“Pharmacy,”</b> and together with Digital Pharmacist, <b>“we”</b> or <b>“us”).</b></p>
                <p>These website terms of use (these <b>“Terms”)</b> govern your access to and use of the Website, which is offered to you conditioned upon your acceptance without modification of these Terms. Please read these Terms carefully prior to using the Website. <b>THESE TERMS CONTAIN IMPORTANT INFORMATION REGARDING LIMITATIONS OF OUR LIABILITY, YOUR INDEMNIFICATION OBLIGATIONS, AND THE LAW GOVERNING, AND DISPUTE RESOLUTION PROCEDURES RELATED TO, YOUR ACCESS AND USE OF THE WEBSITE.</b></p>
                <p>By accessing or using the Website or other elements of the Website, or by clicking to accept or agree to these Terms when this option is made available to you, <b>YOU AGREE TO BE BOUND</b> by these Terms, and our Privacy Policy, available at <Link className='privacy-link' to="https://www.digitalpharmacist.com/client/patient-privacy-policy/">https://www.digitalpharmacist.com/<b>/patient-privacy-policy/</b></Link> <b>(“Privacy Policy”),</b> incorporated herein by reference. <b>If you do not want to accept all of the terms, conditions, and notices of these Terms, you must immediately discontinue your use and access of the Website.</b></p>
                <p>The parties agree as follows:</p>

                <h2>1. Our Collection and Use of Your Data is Governed by Our Privacy Policy</h2>

                <p>Digital Pharmacist believes in protecting your privacy. All information we collect on the Website is subject to our Privacy Policy, except that in some circumstances our collection of such information subjects Digital Pharmacist to the requirements of the Health Information Portability and Accountability Act of 1996 as amended by The Health Information Technology for Economic and Clinical Health Act.  By using the Website or by clicking to accept or agree to these Terms when this option is made available to you, you consent to our use of your information and our contacting you, in each case, in compliance with our Privacy Policy.</p>

                <h2>2. THE WEBSITE IS NOT INTENDED AS A SUBSTITUTE FOR MEDICAL ADVICE</h2>

                <p>The text, graphics, images, software applications, information and other material contained on the Website <b>(“Content“)</b> are for informational purposes only. The Content is not intended to replace or be a substitute for professional medical advice, diagnosis, or treatment. It is your sole responsibility to check product information, including drug packets inserts, regarding dosage, precautions, warnings, interactions, and contraindications before administering or using any drug or supplement discussed on the Website. Always seek the advice of your physician, pharmacist, or other qualified health provider with any questions you may have regarding a medical condition, before staring any new medication or treatment or the proper use of pharmaceutical products. Never disregard professional medical advice or delay in seeking it because of something you have read on this site.</p>

                <p>IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY IMMEDIATELY CALL 911 OR GO TO THE NEAREST EMERGENCY ROOM.</p>

                <h2>3. Digital Pharmacist Does Not Endorse or Recommend any Specific Products or Services</h2>

                <p>Digital Pharmacist contracts with Pharmacy and various pharmaceutical companies to provide coupons, discounts and other Content to users of the Website. References to, or descriptions or images of, products or services (or related coupons and discounts) on the Website are not endorsements of such products or services and such products or services may be available by third parties.  Digital Pharmacist does not recommend or endorse any specific tests, physicians, pharmacist, products, services, procedures, opinions, or other information that may be mentioned on the Website.</p>

                <p>Moreover, “DIGITAL PHARMACIST,” “RXWIKI,” POCKET RX,” “TELEMANAGER” and all related names, logos, product and service names, designs and slogans are trademarks or service marks of Digital Pharmacist. All other names, logos product and service names, designs and slogans on the Website are the trademarks or service marks of their respective owners.</p>

                <h2>4. Digital Pharmacist is Not Responsible for Third-Party Content</h2>

                <p>The Website may contain links to third-party web sites. Digital Pharmacist is not responsible for the content of linked third-party sites, sites framed within the Website, third-party sites provided as search results, or third-party advertisements, and does not make any representations or warranties regarding the content or accuracy of any such content. Your use of third-party websites is at your own risk and subject to the terms and conditions of use for such sites.</p>

                <h2>5. We May Update or Otherwise Revise These Terms at Any Time</h2>

                <p>We reserve the right to change or otherwise modify these Terms at any time. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. Your continued access or use of the Website after receiving notice of any the update, modification or other change to these Terms signifies your acceptance thereof.</p>

                <h2>6. You Must Meet Certain Conditions to Use the Website</h2>

                <p>As a condition of your use of the Website, you warrant that you:</p>
                <ul>
                    <li>are at least 18 years of age; and</li>
                    <li>reside in the United States of America.</li>
                </ul>
                <p><i>If you do not meet all of the following, you must immediately discontinue your use and access of the Website.</i></p>

                <h2>7. You are Prohibited from Using the Website for Certain Purposes</h2>

                <p>You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to, and you must not, use the Website:</p>

                <ul>
                    <li>In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).</li>
                    <li>For the purpose of exploiting, harming, threatening, harassing or defaming any person, or attempting to do any of the foregoing.</li>
                    <li>In any manner that could disable, overburden, damage, or impair the Website or interfere with any other person’s use of the Website, including their ability to engage in real time activities through the Website.</li>
                </ul>

                <p>Additionally, you agree not to, and you must not:</p>

                <ul>
                    <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.</li>
                    <li>Use any manual process to monitor or copy any of the material on the Website or for any other unauthorized purpose without our prior written consent.</li>
                    <li>Use any device, software, or routine that interferes with the proper working of the Website.</li>
                    <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                    <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.</li>
                    <li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.</li>
                    <li>“Frame,” “mirror” or otherwise incorporate any part of this Website into any other website.</li>
                    <li>Otherwise attempt to interfere with the proper working of the Website.</li>
                </ul>

                <p>In addition to any rights we may have or remedies we may pursue, we may deny your access to and use of the Website if we believe you have engaged in any activity prohibited under this Section.</p>

                <h2>8. Communications</h2>

                <p>IF YOU HAVE AGREED THAT WE CAN SEND YOU MESSAGES CONTAINING ADVERTISEMENTS OR OFFERS FOR GOODS AND SERVICES, WE MAY DO SO FROM TIME TO TIME AND MAY SEND SUCH OFFERS BY VOICE OR SMS (OR TEXT) MESSAGE TO THE MOBILE PHONE NUMBER YOU DESIGNATE FOR SUCH PURPOSE. Message and data rates for such SMS messages may apply. Your consent to receipt of such messages is not, and will not be, a condition to any purchase. If at any time you change your mind regarding your consent to such messages, you must contact us in accordance with these Terms..</p>

                <h2>9. Intellectual Property Rights</h2>

                <p>The content and information on the Website is proprietary to us and/or our partners and providers and is protected by United States and international copyright, trademark, patent, trade secret and other intellectual property and proprietary rights laws.</p>

                <p>You agree not to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, transmit, store, download, sell, or re-sell any information, software, products, materials or services obtained from or through the Website, except you may take such actions:</p>

                <ul>
                    <li>as necessary for, or incidental to, your use of the Website (such as storing files that are automatically cached to your internet browser); or</li>
                    <li>to make a reasonable number of copies of Website pages for your own personal, non-commercial use.</li>
                </ul>

                <p>No right, title or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by Digital Pharmacist.</p>

                <h2>10. Disclaimer Regarding International Use</h2>

                <p>Digital Pharmacist makes no claim that the Website is appropriate or lawful for use or access outside the United States. Furthermore, our databases are located in the United States. If you access the Website from outside the United States, you dos so at your own risk. You are solely responsible for complying with all local laws, rules and regulations regarding online conduct and website access. By sending us your data, you consent to its transfer to and storage within the United States.</p>

                <h2>11. Limitations of Liability of Digital Pharmacist and Its Licensors</h2>

                <p>You understand and agree that neither Digital Pharmacist nor its suppliers or vendors are responsible for any claim, loss, or damage directly or indirectly resulting from your use of the Website or the information resources contained or accessible through the Website.  The access to and use of the Website and the Content is solely at your own risk.  When using the Website, information will be transmitted over a medium that may be beyond the control and jurisdiction of Website and its suppliers. Accordingly, Digital Pharmacist assumes no liability for or relating to the delay, failure, interruption, or corruption of any data or other information transmitted in connection with use of The Website.</p>

                <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DIGITAL PHARMACIST, ITS SUPPLIERS OR VENDORS, OR ITS OR THEIR RESPECTIVE EMPLOYEES, OFFICERS, DIRECTORS, AGENTS, AFFILIATES, SUPPLIERS, VENDORS, LICENSORS OR PARTNERS (COLLECTIVELY, “DIGITAL PHARMACIST PARTIES”)  BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM ANY LOSS OF USE, LOSS OF DATA, LOSS OF PROFITS, BUSINESS INTERRUPTION, LITIGATION, OR ANY OTHER PECUNIARY LOSS, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR OTHERWISE ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE, OPERATION OR PERFORMANCE OF THE WEBSITE, WITH THE DELAY OR INABILITY TO USE THE WEBSITE, ANY DEFECTS IN THE  CONTENT, OR WITH THE PROVISION OF, OR FAILURE TO MAKE AVAILABLE, ANY INFORMATION, CONTENT, PRODUCTS, SERVICES, OR OTHER RESOURCES AVAILABLE ON OR ACCESSIBLE THROUGH THE WEBSITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

                <p>ANY LIABILITY ON THE PART OF THE DIGITAL PHARMACIST PARTIES, IN THE AGGREGATE, SHALL NOT EXCEED U.S. $1,000.  DIGITAL PHARMACIST PARTIES SHALL NOT BE LIABLE FOR ANY PERSONAL INJURY, INCLUDING DEATH, CAUSED BY USE OR MISUSE OF THE WEBSITE, CONTENT, OR SERVICES. Any claims arising in connection with your use of the Website, any Content, or services must be brought within one (1) year of the date of the event giving rise to such action occurred. Remedies under these Terms are exclusive and are limited to those expressly provided for in these Terms.</p>

                <p>You acknowledge and agree that the limitations set forth above are fundamental elements of these Terms and the Website would not be provided to you absent such limitations.</p>

                <h2>12. Disclaimer of Warranty</h2>

                <p>The Website and the content are provided on an “as is” basis. Digital Pharmacist, ITS LICENSORS, AND ITS SUPPLIERS, TO THE FULLEST EXTENT PERMITTED BY LAW, DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES’ RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE.</p>

                <p>Without limiting the foregoing, Digital Pharmacist, its licensors, and its suppliers make no representations or warranties about the following:</p>

                <ol>
                    <li>The accuracy, reliability, completeness, currency, or timeliness of the Content, products, software, functionality, text, graphics, links, or communications provided on or through the use of the Website or Digital Pharmacist, including the substance, accuracy, or sufficiency of any service or product information listed on the Website.</li>
                    <li>The satisfaction of any government regulations requiring disclosure of information on prescription drug products or the approval or compliance of any software tools with regard to the Content contained on the Website.</li>
                    <li>That the Website will operate without interruption or error.</li>
                </ol>

                <h2>13. How to Contact Us</h2>

                <p>For questions or comments regarding these Terms, please contact us at Digital Pharmacist Inc., 3800 N Lamar Blvd, Suite #320, Austin, TX 78756, (877) 959-7550 and <Link className='privacy-link' to="mailto:support@digitalpharmacist.com">support@digitalpharmacist.com</Link>.</p>

                <h2>14. Governing Law and Venue</h2>

                <p>THESE TERMS AND YOUR USE OF THE WEBSITE SHALL BE GOVERNED BY THE LAWS OF THE STATE OF TEXAS, WITHOUT REGARD TO PRINCIPLES OF CONFLICT OF LAWS.</p>
                <p>The state or federal courts sitting in Travis County, Texas shall have exclusive jurisdiction and venue over any dispute arising out of these Terms and sale, and you hereby consent to the jurisdiction of such courts.</p>
                <p>These Terms may not be modified, supplemented, qualified, or interpreted by any trade usage or prior course of dealing not made a part of these Terms by its express terms. The invalidity or unenforceability of any provision of these Terms shall not affect the validity of these Terms as a whole and any such provision should be enforced by authorities and reconstructed if need be, to apply to the maximum extent allowable under applicable law. The failure by either party to enforce at any time any of the provisions of these Terms, to exercise any election or option provided herein, or to require at any time the performance of the other of any of the provisions herein will not in any way be construed as a waiver of such provisions. The section headings used herein are for convenience only and shall not be given any legal import.</p>
            </div>
            <Footer />
        </>
    );
};

export default TemsConditionPage;
