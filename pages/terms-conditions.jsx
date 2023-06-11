/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { AppShell } from '@saas-ui/app-shell'
import {
    Sidebar,
    SidebarSection,
    SidebarToggleButton,
    SidebarOverlay,
    NavGroup,
    NavItem,
  } from '@saas-ui/sidebar'
  import { Box, Badge,Image, Heading, HStack, Flex, Checkbox } from "@chakra-ui/react";
  import ThemeToggle from "../components/layouts/theme-toggle";
  import { useRouter } from 'next/router';
  import { Modal, useModal, Button, Text } from "@nextui-org/react";


const navigation = [
    { name: 'Dashboard', href: '#', icon: <svg>...</svg>, current: true },
    { name: 'Team', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Projects', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Calendar', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Documents', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Reports', href: '#', icon: <svg>...</svg>, current: false },
  ];
  
  const secondaryNavigation = [
    { name: 'Website redesign', href: '#' },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function Example() {
  const [open, setOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter();
  const { setVisible, bindings } = useModal();

  const handleNavItemClick = (href) => {
    router.push(href);
  };
  return (
    <AppShell
  variant="static"
  minH="100%"
  navbar={
    <Box
      as="header"
      borderBottomWidth="1px"
      py="2"
      px="4"
      position="sticky"
      top="0"
    >
    </Box>
  }
  sidebar={
    <Sidebar position="sticky" top="40px">
      <SidebarSection>
      <NavItem onClick={() => handleNavItemClick('#')}>Terms and Conditions</NavItem>
        <NavItem onClick={() => handleNavItemClick('/privacy-policy')}>Privacy Policy</NavItem>
      </SidebarSection>
    </Sidebar>
  }
>
  <Box as="main" flex="1" py="2" px="4">
  <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
         
  <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
      <p className="mb-4">
        IMPORTANT: PLEASE REVIEW THIS AGREEMENT CAREFULLY. IN PARTICULAR, PLEASE REVIEW THE MUTUAL ARBITRATION PROVISION IN SECTION 12.2.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">1. GENERAL PROVISIONS</h2>
      <p>
        1.1 Background Statement &amp; Payments<br />
        Unlimit Potential is the creator of a technology platform that creates a marketplace to connect potential clients (Service Requesters) with fully-licensed (to the extent required by applicable law) and qualified professionals, such as Service Professional, in the business of providing creative content. Service Professional understands and intends that Service Professional will provide the services to Service Requesters strictly as an independently-owned and operated business enterprise, and not as an employee, worker, agent, joint venturer, partner or franchisee of Unlimit Potential or any Service Requester for any purpose.
      </p>
      <p>
        Unlimit Potential and Service Professional acknowledge and agree that the Services are outside the usual course of Unlimit Potential’s business and that the Services will be performed outside all of the places of Unlimit Potential’s business.
      </p>
      <p>
        Fees: To the extent the service or any portion thereof is made available for any fee, you will be required to select a form of payment and provide information to us regarding your form of payment. You represent and warrant to us that such information is true and that you are authorized to use the payment instrument. You will promptly update your account information with any changes (for example, a change in your billing address) that may occur. You agree to pay to us the amount that is specified in accordance with these terms of service. If you dispute any charges you must let us know within sixty (60) days after the date that we charge you. We reserve the right to change our prices. If we do change prices, we will provide notice of the change on the Site or in email to you, at our option, at least 30 days before the change is to take effect. Your continued use of the service after the price change becomes effective constitutes your agreement to pay the changed amount. You shall be responsible for all taxes associated with the services other than U.S. taxes based on our net income.
      </p>
      <p>
        Refunds; Reversals: Once a transaction has been initiated, it cannot be reversed. Deposits using a bank account or debit card may be reversed or may be subject to a chargeback or related claim. Except as set forth in this Agreement, all payment transactions processed through the services are non-refundable. You may have additional refund or charge-back rights under your agreement with the recipient of such funds, your bank, or applicable law. You should periodically review statements from your bank, which should reflect all applicable payment transactions made using that payment method. You can also always access the record of your transactions by logging into your account.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">1.2 The Unlimit Potential Platform and Terms of Use</h2>
      <p>
        Before receiving access to the Unlimit Potential Platform, Service Professional must also review and agree to the terms of the Unlimit Potential Platform, which are incorporated herein by reference and which Service Professional acknowledges he/she has reviewed and accepted. To the extent the Terms of Use are inconsistent with this Agreement, this Agreement shall control. From time to time, in their sole and complete discretion, Service Requesters will post jobs on the Unlimit Potential Platform, setting forth the nature of the Services required (the Jobs). Jobs posted will include a date, general neighborhood or geographic area where the Job will take place and time frame (the Timeframe) in which Services are requested, and an estimate of time necessary to complete the work (the Estimated Work Time). Timeframes will be displayed on the Unlimit Potential Platform either as a specific time (i.e. 5:00 pm) or as a range (i.e., 2:00 pm to 5:00 pm). The Estimated Work Time will be displayed either as a specific time (i.e. 2 hours) or as a range (i.e., 2-3 hours). Unlimit Potential does not guarantee any minimum number of jobs will be available to Service Professional at any point during the term of this Agreement. Subject only to the limitation set forth in Section 9.1, Service Professional is not obligated to review the Jobs posted or select any Jobs posted by any Service Requester at any time. Once a Service Professional selects a Job, the Unlimit Potential Platform will confirm with the Service Professional that the Job has been booked by the Service Professional. Service Professional agrees that Service Professional's name, phone number and likeness may be provided or made available to Service Requester by or on behalf of Unlimit Potential after the Job is booked. It is possible that, based on Service Requester specifications, a Service Professional may claim a Timeframe and/or Estimated Work Time and receive a Job that has a shorter Timeframe and Estimated Work Time (i.e., a Service Professional may claim a Job with a Timeframe of noon-3 pm and has an Estimated Work Time of 2-3 hours and receive a Job that is at 1 pm and only 2 hours.) Service Professional acknowledges and agrees that s/he understands that claiming a Job that has a Timeframe and Estimated Work Time may result in receipt of a Job of less than the maximum time set forth in the Estimated Work Time.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">1.3 Background Checks</h2>
      <p>
        Before receiving access to the Unlimit Potential Platform, Service Professional must submit to and pass a background check through Unlimit Potential’s background check provider. After receiving access to the Unlimit Potential Platform, Unlimit Potential may from time-to-time, in its reasonable discretion and in accordance with applicable law, conduct additional background checks on Service Professional through Unlimit Potential’s background check provider. Unlimit Potential conducts background checks in accordance with applicable law.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">1.4 Registration Processing</h2>
      <p>
        In select markets, Service Professional may be required to pay nonrefundable registration processing (Registration Processing Fee) in order to process Service Professional’s registration to use the Unlimit Potential Platform. Payment of the Registration Processing Fee does not guarantee a Service Professional access to or Jobs through the Unlimit Potential Platform.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">2. THE SERVICES</h2>
      <p>
        Service Professional shall be eligible to book Jobs through the Unlimit Potential Platform requesting any Services that Service Professional is fully-licensed (to the extent required by applicable lawin the jurisdiction where the services are being performed) and qualified to provide as specified on Schedule 1 to this Agreement and as selected by the Service Professional during the sign-up process. In those jurisdictions where a license, permit, or certification is required to perform the Services, Service Professional shall, upon reasonable request, provide proof to Unlimit Potential of all necessary licenses, permits and/or certifications before Service Professional provides any such Services under this Agreement.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">2.1 Job Completion</h2>
      <p>
        Once Service Professional has accepted a Job, Service Professional is contractually obligated to complete the Job within the Timeframe specified by, and to the satisfaction of, the Service Requester. Service Professional may not cancel the Job without advance notice of at least 24 hours to Service Requester and Unlimit Potential, except in the case of an unavoidable emergency, in which case, Service Professional shall notify Service Requester and Unlimit Potential as soon as practicable. Repeated cancellations and/or rescheduled Jobs on short-notice by Service Professional may result in termination of this Agreement in accordance with Section 9. Additionally, at Unlimit Potential’s reasonable discretion, cancellation or rescheduling by the Service Professional or Service Professional’s failure to complete a Job to the satisfaction of Service Requester may result in liquidated damages being charged to Service Professional as described in Schedule 2. Service Professional may also be entitled to a fee or liquidated damages in the event a Service Requester cancels or reschedules a Job as described in Schedule 2. Modifications to Schedule 2 will be effective upon written notification to Service Professional and will supersede any and all prior versions.
      </p>
      <p>
      Unlimit Potential is interested only in the results to be achieved by Service Professional: completion of each accepted Job in accordance with Service Requester's specifications as detailed by Service Requester. Service Professional is solely responsible for determining the manner and method of performing all Jobs under this Agreement. Service Professional understands and agrees that Service Professional's failure to complete a Job in accordance with Service Requester's specifications detailed by Service Requester through the Unlimit Potential Platform constitutes a material breach of this Agreement and may result in liquidated damages as described in Schedule 2 and/or termination of this Agreement in accordance with Section 9, unless Service Professional cures the breach either through a reduced Service Fee or completion of the Job (without additional Service Fees being charged to the Service Requester) to the satisfaction of the Service Requester.

By accepting this Agreement, Service Professional authorizes Unlimit Potential to withhold the amounts listed in Schedule 2 (where applicable) as payment of liquidated damages from Service Professional's Service Fees.

2.2 Service Requester Ratings.
Service Professional acknowledges that the Unlimit Potential Platform is available only to those Service Professionals who maintain high standards of professionalism and quality of service. Service Professional acknowledges that Service Requester may rate and review a Service Professional at the end of every booking. To ensure that the Unlimit Potential Platform remains a reliable platform, Service Professional agrees to maintain a Service Requester rating at or above the minimum rating established by Unlimit Potential for access to the Unlimit Potential Platform, as modified from time to time. In the event a Service Professional's aggregate rating falls below the applicable minimum rating, Unlimit Potential reserves the right to deactivate the Service Professional's access to the Unlimit Potential Platform. Unlimit Potential agrees to provide Service Professional written notice of the minimum rating and any changes thereto.

2.3 No Control.
Service Professional shall be, at all times while this Agreement is in effect, both under the terms of this Agreement and in fact, free from Unlimit Potential's supervision, control and direction in the performance of the Services. Unlimit Potential shall not control or have any right to control the manner or means by which Service Professional performs the Services, including but not limited to the time and place Service Professional performs the Services, the Jobs Service Professional selects, the tools and materials used by Service Professional to complete the Jobs, the helpers, assistants, subcontractors or other personnel (if any) used by Service Professional in completing Jobs, or the manner in which Service Professional completes the Jobs. Unlimit Potential will not and has no right to, under any circumstances, require Service Professional to participate in training, nor does Unlimit Potential offer or provide training to Service Professional. Those provisions of the Agreement reserving ultimate authority in Unlimit Potential have been inserted solely to achieve compliance with federal, state, or local laws, regulations, and interpretations thereof.

Service Professional is not obligated to personally perform the Services. Service Professional shall furnish at his/her own discretion, selection, and expense any and all assistants, helpers, subcontractors or other personnel the Service Professional deems necessary and appropriate to complete the Services. Service Professional shall be solely responsible for the direction and control of any such personnel and for all acts and omissions of same.

Before any Services are performed by any assistants, helpers, subcontractors or other personnel engaged by Service Professional, Service Professional shall require any such individuals to submit to a basic background check satisfactory to Unlimit Potential.

Service Professional assumes full and sole responsibility for the payment of all compensation, benefits and expenses of helpers, assistants, subcontractors and/or other personnel, if any, and for all required state and federal income tax withholdings, unemployment insurance, and social security taxes as to Service Professional and all persons engaged by Service Professional in the performance of the Services. Service Professional agrees that he/she is fully and solely responsible for filing, and shall file, an appropriate schedule of expenses and all other appropriate tax documents with the Internal Revenue Service in compliance with required filing periods. Service Professional shall be responsible for, and shall indemnify and hold Unlimit Potential harmless for any claims, suits, or actions related to this provision, including any such claims brought by Service Professional or his or her assistants, subcontractors and/or other personnel, or by any third party with respect to any claims for taxes or contributions, including penalties and interest.

To the extent required by applicable law, Service Professional agrees to maintain a separate set of books or records reflecting all items of income and expense associated with operating his or her business.

3. SERVICE FEES

3.1 Service Fees.
Service Requester shall pay for completed Jobs through the Unlimit Potential Platform at the rates set by Unlimit Potential at the time the Job is posted on the Unlimit Potential Platform, which shall be based on the stated parameters of the Job (the Job Rate). Each Job made available to Service Professional on the Platform shall set forth the Timeframe, Estimated Work Time, details about the Service requested, the Job Rate, and the estimated Service Fee the Service Professional shall be entitled to upon completion of the Job, as modified from time to time. The difference between the Job Rate and Service Fee shall be the fee owed to Unlimit Potential (Booking Fee).

Modifications to pricing and fees will be effective upon written notification to Service Professional and will supersede any and all prior versions. Notwithstanding the provisions of Section 16, the availability of any such modified pricing and/or fees on the Unlimit Potential Platform shall constitute written notice to Professional for purposes of this Section 3.1, which shall be effective at the time such modified pricing and/or fees are made available to Service Professional. By accepting this Agreement, Service Professional authorizes Unlimit Potential to withhold Unlimit Potential's Booking Fee and any other applicable fees from the Job Rate before remitting to the Service Professional the Service Fee to which Service Professional is entitled for each Job.

For purposes of New York City Local Law 140 only (to the extent applicable), the value of the services performed pursuant to this Agreement is equal to the net amount paid to Service Professional for each Job, after accounting for the pre-negotiated fees and/or platform costs (including the Booking Fee and any other fees).

3.2 Service Fee Payment.
When a Job is complete, Service Professional will submit to the Service Requester and Unlimit Potential confirmation that the Job is complete. Unlimit Potential will transmit payment to Service Professional, whether in Service Professional’s capacity as a sole proprietorship or other corporate entity, via direct deposit. So long as Service Professional has completed the steps necessary to set up a direct deposit account and provided those details to Unlimit Potential, Unlimit Potential shall then remit payment for each Job, less Unlimit Potential's Booking Fee and any other applicable fees within seven (7) business days following the day the Job was completed. Absent Service Professional's failure to complete the appropriate steps to arrange for payment by direct deposit, Unlimit Potential's failure to remit payment within seven (7) business days following the day the Job was completed shall constitute a material breach of this Agreement. For purposes of this Section 3.3, “remit” shall refer to Unlimit Potential’s initiation of a payment to Service Professional; provided that Unlimit Potential has initiated payment to Service Professional within seven (7) business days following the day the Job was completed, Unlimit Potential shall not be liable if the paid amount is not accessible by Service Professional within that time frame. Service Professional may request payment for a booking to be remitted sooner than as set forth above for a fee as set forth in through the Unlimit Potential Platform. Such fee will apply each time that the Service Professional requests a payment sooner than seven (7) business days following the day the Job was completed. If applicable, Unlimit Potential will report the payments paid to Service Professional under this Agreement by filing the appropriate Form 1099 with the Internal Revenue Service as required by law. Payment processing services for Service Professionals are provided by Stripe and are subject to the Stripe Connected Account Agreement, located at https://stripe.com/us/connect-account/legal, which includes the Stripe Terms of Service, located at https://stripe.com/us/legal (collectively, the Stripe Services Agreement). By agreeing to this Agreement, Service Professional agrees to be bound by the Stripe Services Agreement, as the same may be modified by Stripe from time to time. As a condition of Unlimit Potential enabling payment processing services through Stripe, Service Professional agrees to provide Unlimit Potential accurate and complete information about Service Professional and Service Professional's business, and Service Professional authorizes Unlimit Potential to share it and transaction information related to Service Professional's use of the payment processing services provided by Stripe.

3.3 Project Advisor Services.
Certain Jobs may be designated as Project Advisor Service Jobs and may utilize Statement of Works (“SOWs”), which include additional details regarding the Project Advisor Service Job. For Project Advisor Service Jobs and notwithstanding anything herein to the contrary, a portion of the Service Fee may be paid upon Project Initiation (as defined below), and the remaining portion of the Service Fee shall be paid upon Project Completion (as defined below). Project Initiation is defined as when the Service Professional first arrives at the address of the Service Requester to begin the Services for the Project Advisor Service Job. Project Completion is defined as when Unlimit Potential receives written confirmation from both the Service Requester and the Service Professional that the Project Advisor Service Job has been completed, as reasonably determined by Unlimit Potential.

4. EQUIPMENT AND OPERATIONS

4.1 Compatible Mobile Device.
Unless otherwise mutually agreed in writing by the parties, in order to book Jobs, Service Professional must possess a smartphone equipped with access to the Unlimit Potential Platform (the Compatible Mobile Device).

4.2 Pro Portal.
Unless otherwise mutually agreed in writing by the parties, in order to book Jobs, Service Professional must download Unlimit Potential's Service Professional mobile application (the Pro Portal) onto the Compatible Mobile Device used by the Service Professional. Unlimit Potential collects the latitude and longitude location (Location Coordinates) of the Compatible Mobile Device from the Pro Portal for a period of time starting 4 hours prior to the scheduled start of a Job for the purpose of (i) providing support for the Service Professional and Service Requester to find each other and (ii) confirming that the Service Professional will perform the Job claimed by the Service Professional and ending 2 hours following the scheduled end of a Job for the purpose of confirming that the Job is completed. In addition, at any point, Unlimit Potential may collect the Location Coordinates of the Compatible Mobile Device on which the Pro Portal is installed for the purpose of notifying a Service Professional of Jobs that are posted on short notice by Service Requesters in the Service Professional's vicinity. Service Professional shall have no obligation to accept any Job offered in this manner. For up to a 4 hour period prior to the scheduled start of a Job, Unlimit Potential may share the Service Professional's Location Coordinates with the Service Requester for the purpose of assisting the Service Requester and Service Professional and to confirm that the Service Professional will perform the Job claimed by the Service Professional. Unlimit Potential may also disclose the Service Professional's Location Coordinates and contact information as required by applicable law, to authorized service providers, or when Unlimit Potential believes that such disclosure is necessary to protect the rights, property, or safety of Unlimit Potential, Unlimit Potential Platform users, Service Requesters, or others. Unlimit Potential has no right to collect or use GPS data for the purpose of controlling or monitoring the manner and means by which the Service Professional provides the Services contemplated by this Agreement, or the frequency with which the Service Professional uses the Unlimit Potential Platform to book Jobs. The Service Professional may stop Location Coordinates collection only by uninstalling the Pro Portal from the Compatible Mobile Device. Unlimit Potential retains Location Coordinates information to confirm that the Job has been completed and retains de-identified Location Coordinates data indefinitely. By executing this Agreement, Service Professional agrees to the use and disclosure of Location Coordinates information as described above.

4.3 Costs of Operation.
Service Professional is solely responsible for any costs or expenses incurred by Service Professional in connection with the operation of Service Professional’s business and the performance of the Services. Service Professional shall furnish and maintain, at Service Professional's own expense, the tools, equipment, supplies, and other materials used to perform the Services. Service Professional, at Service Professional's sole discretion, shall determine what equipment, supplies, and materials are necessary to perform the Services, and where, when, and at what cost, to purchase or maintain any necessary equipment, supplies, tools, and materials.

4.4 Unlimit Potential Apparel or Identification.
Service Professional will have no obligation to wear or display Unlimit Potential branded apparel, badge or other form of identification.

4.5 Use of Voice, Image and Likeness.
Service Professional gives Unlimit Potential permission to use any and all of Service Professional's voice, image, likeness, and any ratings and reviews from Service Requesters about Service Professional, with or without using Service Professional's name, in connection with the products and/or services available through the Unlimit Potential Platform, for the purposes of advertising and promoting such products and/or services and/or Unlimit Potential, for the purposes of identifying Service Professional to Service Requester, and/or for other purposes deemed appropriate by the Unlimit Potential in its reasonable discretion, except to the extent expressly prohibited by law. In addition to the foregoing, Service Professional may be required to submit an image for use by the Unlimit Potential Platform to facilitate identifying Service Professional with Service Requesters. Service Professional also represents and warrants the Service Professional owns the copyright of any image or likeness that the Service Professional provides to Unlimit Potential.

4.6 Call and SMS Data.
Service Professional agrees to Unlimit Potential's use of a service provider to mask the Service Professional's phone number when the Service Professional calls or exchanges text (SMS) messages with the Service Requester. To facilitate this process, Unlimit Potential and its service provider will receive in real time and store call data, including the date and time of the call or text (SMS) message, the parties' phone numbers, and the content of the text (SMS) messages. Service Professional consents to the masking process described above and to Unlimit Potential's use and disclosure of this call data for its legitimate business purposes.

Service Professional also consents to Unlimit Potential's sending text (SMS) messages directly to the Service Professional as described in the Terms of Use.

5. RELATIONSHIP OF THE PARTIES

Service Professional is an independent contractor. Service Professional represents that he or she is customarily engaged in an independently established trade, occupation, profession and/or business offering the Services to the general public and/or Service Professional represents that he or she maintains a principal place of business in connection with Service Professional’s trade, occupation, profession and/or business that is eligible for a business deduction for federal income tax purposes. This Agreement shall not be construed to create any association, partnership, joint venture, employee, worker or agency relationship between Service Professional and Unlimit Potential or any Service Requester for any purpose. Service Professional has no authority (and shall not hold himself or herself out as having authority) to bind Unlimit Potential and Service Professional shall not make any agreements or representations on Unlimit Potential's behalf without Unlimit Potential's prior written consent. Service Professional understands that Service Professional will not be eligible to participate in any benefit plans offered to Unlimit Potential's employees, including, but not limited to, vacation, group medical or life insurance, disability, profit sharing or retirement benefits or any other fringe benefits or benefit plans offered by Unlimit Potential to its employees. Unlimit Potential will not be responsible for withholding or paying any income, payroll, Social Security, or other federal, state, or local taxes, making any insurance contributions, including unemployment or disability, or obtaining workers' compensation insurance on Service Professional's behalf. Service Professional shall be responsible for, and shall indemnify and hold Unlimit Potential harmless for any claims, suits, or actions related to this provision, including any such claims brought by Service Professional or by any third party with respect to any claims for taxes or contributions, including penalties and interest.

6. REPRESENTATIONS AND WARRANTIES

Service Professional represents and warrants to Unlimit Potential that: (a) Service Professional has, and any assistants, helpers, subcontractors or other personnel engaged by Service Professional have the legal right to provide the Services that are contemplated by this Agreement in the United States; (b) Service Professional is, and any assistants, helpers, subcontractors or other personnel engaged by Service Professional are fully-licensed (to the extent required by applicable law) and authorized to provide the Services contemplated by this Agreement within the jurisdiction in which Service Professional and any assistants, helpers, subcontractors or other personnel engaged by Service Professional intend to offer said Services, and have the required skill, experience, and qualifications to perform the Services; (c) Service Professional shall perform the Services in accordance with best industry standards for similar services and shall ensure that all assistants, helpers, subcontractors and other personnel used by the Service Professional in relation to the delivery of Services shall do likewise, including the completion of all Jobs referred to Service Professional that he/she opts to accept through the Platform; (d) Service Professional and any assistants, helpers, subcontractors or other personnel engaged by Service Professional shall perform the Services in accordance with all applicable laws, rules and regulations; (e) Service Professional has the right to and does advertise and hold itself out to the public as available to provide the same or similar services as those provided under this Agreement; (f) Service Professional has the right to and does contract with other businesses to provide the same or similar services as those provided under this Agreement and maintains a clientele without restrictions from Unlimit Potential or the Service Requester; and (g) Service Professional maintains a business location that is separate from the business or work location of Unlimit Potential or the Service Requester.

For Service Professionals performing the Services in Washington State, Service Professional shall, within a reasonable period of time after this Agreement is electronically signed, establish an account with the Department of Revenue and all other required state agencies, for the business Service Professional is conducting for the payment of all state taxes normally paid by employer and businesses. Service Professional further agrees, within a reasonable period of time after this Agreement is electronically signed, to register for and receive a unified business identifier number from Washington State.

Service Professional acknowledges that his/her failure to comply with the foregoing shall constitute a material breach of this Agreement.

7. INDEMNIFICATION

Service Professional shall defend, indemnify and hold harmless Unlimit Potential and its affiliates, parents, subsidiaries, and partners and their respective officers, directors, employees, agents, successors, and assigns and any other entity that requests or is in any way involved in making available, arranging and/or facilitating services through the Unlimit Potential Platform from and against all losses, damages, liabilities, deficiencies, actions, judgments, interest, awards, penalties, fines, costs, or expenses of whatever kind (including reasonable legal fees) arising out of or resulting from: (a) bodily injury, death of any person, theft or damage to real or tangible, personal property resulting from Service Professional's acts or omissions, which shall include any acts or omissions of any assistants, helpers, subcontractors or other personnel engaged by Service Professional; and (b) Service Professional's breach of any representation, warranty, or obligation under this Agreement.

The Services that Service Professional provides pursuant to this Agreement are fully and entirely Service Professional's responsibility. Unlimit Potential is not responsible or liable for the actions or inactions of a Service Requester or other third party in relation to the Services provided by Service Professional. Service Professional understands, therefore, that by using the Unlimit Potential Platform, Service Professional will be introduced to third parties in relation to whom Unlimit Potential has not conducted any background or reference checking, that may be potentially dangerous, and that Service Professional uses the Unlimit Potential Platform at his/her own risk.

8. INSURANCE

It is the sole responsibility of the Service Professional to maintain in full force and effect commercial and general liability, adequate workers' compensation (or, if permitted by law, occupational accident insurance), unemployment, liability, and other forms of insurance, in each case with insurers reasonably acceptable to Unlimit Potential, with policy limits sufficient to protect and indemnify Unlimit Potential and its affiliates, and each of their officers, directors, agents, employees, subsidiaries, parents, partners, members, controlling persons, and successors and assigns, from any losses resulting from the conduct, acts, or omissions of Service Professional or Service Professional's assistants, agents, contractors, servants, or employees. Service Professional shall, upon reasonable request, name Unlimit Potential and its affiliates as additional insureds under the applicable policies and provide proof to Unlimit Potential of such insurance before Service Professional provides any such services under this Agreement.

9. TERM; TERMINATION

9.1 Term.
This Agreement shall be effective as of the date it is executed by Service Professional and shall remain in effect unless and until terminated as set forth in this Section 9 (the Term). Service Professional understands that Unlimit Potential may temporarily deactivate Service Professional's profile on Unlimit Potential Platform in the event that Service Professional is inactive on the Unlimit Potential Platform for a period of 28 days or more, as modified from time to time. In such circumstances, Unlimit Potential shall reactivate Service Professional's profile upon request from Service Professional.

The parties acknowledge that the term of this Agreement does not reflect an uninterrupted service arrangement, as this Agreement guarantees Service Professional the right to choose when to make himself or herself available and each Job referred and accepted is treated as a separate service arrangement.

9.2 Termination.
(a) Unlimit Potential and Service Professional may terminate this Agreement, effective immediately upon written notice to the other party, in the event that other party materially breaches this Agreement. A material breach shall include, but not be limited to, the acts or omissions expressly defined as constituting a material breach herein, misconduct, Unlimit Potential's failure to timely remit Service Fees as described herein, Service Professional's repeated failure to complete a Job he or she has booked on the platform to the Service Requester’s satisfaction, Service Professional's failure to meet the applicable minimum rating, or if a Service Professional cancels or reschedules two (2) or more Jobs he or she has booked on less than 2 hours' notice prior to the applicable Job start time within any twenty-eight (28) day period.

In the event there is a dispute whether Unlimit Potential or Service Professional materially breached the agreement, and it cannot be resolved by informal negotiations, the parties agree to submit any such dispute to final and binding arbitration, unless Service Professional exercises his/her right to opt out of arbitration, as described in Section 12.2, below.

(b) In addition to the foregoing, Service Professional may terminate the Agreement for any reason upon fifteen (15) days' written notice.

9.3 Service Professional's Obligations Upon Termination.
Upon termination of this Agreement for any reason, Service Professional shall: (a) complete any outstanding Jobs Service Professional has booked (the Outstanding Jobs) and (b) certify in writing to Unlimit Potential that Service Professional has complied with the requirements of this Section.

9.4 Unlimit Potential's Obligations Upon Termination.
Upon termination of this Agreement: (a) if the termination is effected by Unlimit Potential, Unlimit Potential shall immediately pay to Service Professional any outstanding earned Service Fees; or (b) if the termination is effected by Service Professional, Unlimit Potential shall pay to Service Professional any outstanding earned Service Fees within seven (7) business days. In either event, Unlimit Potential shall pay Service Fees for any Outstanding Jobs as soon as practicable after Service Professional has completed the Outstanding Jobs.

9.5 Surviving Provisions.
The terms and conditions of this Section 9.5 and Sections 5, 6, 7, 9.3, 9.4, 10, 11, and 12 (including, but not limited to, Section 12.2) shall survive the expiration or termination of this Agreement.

10. OTHER BUSINESS ACTIVITIES; NON-EXCLUSIVITY

Service Professional may be engaged or employed in any other business, trade, profession, or other activity, including providing Services to customers booked through means other than the Unlimit Potential Platform, including other web-based portals, smartphone applications, and/or platforms. Unlimit Potential has no obligation to utilize Service Professional under this Agreement and may use other providers to perform the same or similar services as those that may be performed by Service Professional under this Agreement.

11. ASSIGNMENT

Service Professional may not assign this Agreement, absent written authorization by Unlimit Potential. This provision shall not be construed as limiting Service Professional’s right to engage personnel to assist in the Services as set forth in this Agreement. Unlimit Potential may freely assign its rights and obligations under this Agreement at any time. This Agreement will inure to the benefit of, be binding on, and be enforceable against, each of the parties hereto and their respective successors and assigns.

12. DISPUTE RESOLUTION; GOVERNING LAW

12.1 Informal Negotiations.
To expedite resolution and reduce the cost of any dispute, controversy or claim related to this Agreement or otherwise arising from the relationship between Service Professional and Unlimit Potential, Service Professional and Unlimit Potential agree to first attempt to negotiate any dispute informally for at least thirty (30) days before initiating any arbitration or court proceeding. Such informal negotiations will commence upon written notice of the dispute, controversy, or claim. Service Professional's address for such notices is the address provided by Service Professional to Unlimit Potential. Unlimit Potential's address for such notices is Unlimit Potential
12.2 Mutual Arbitration Provision.
Unlimit Potential AND SERVICE PROFESSIONAL MUTUALLY AGREE TO WAIVE THEIR RESPECTIVE RIGHTS TO THE RESOLUTION OF DISPUTES IN A COURT OF LAW BY A JUDGE OR JURY AND AGREE TO RESOLVE ANY DISPUTE IN ARBITRATION, as set forth below. This Mutual Arbitration Provision is governed by the Federal Arbitration Act (9 U.S.C. §§ 1-16) and shall survive the termination of this Agreement.
Except as expressly provided below, this Mutual Arbitration Provision shall apply to any and all Claims (as defined below) between you and Unlimit Potential, including, but not limited to, any Unlimit Potential d/b/as, affiliates, subsidiaries, parents, successors and assigns and each of Unlimit Potential’s respective officers, directors, investors, insurers, employees, agents, or shareholders. This Mutual Arbitration Provision shall also apply to any and all disputes and/or claims between you and any Service Requester, and/or any other third-party entity involved in requesting or in any way involved in making available, arranging and/or facilitating the Services. The parties agree that Service Requesters and the other third-parties referenced in this paragraph are intended third-party beneficiaries of this Mutual Arbitration Provision. The parties agree that any disputes and/or claims regarding the application of this Mutual Arbitration Provision to any such Service Requesters and/or other third-parties referenced in this paragraph shall be resolved exclusively by an arbitrator.

EXCEPT AS EXPRESSLY PROVIDED BELOW, ALL DISPUTES AND/OR CLAIMS BETWEEN YOU AND Unlimit Potential SHALL BE EXCLUSIVELY RESOLVED IN BINDING ARBITRATION ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED.

Disputes and claims covered by this Mutual Arbitration Provision include, but are not limited to, any dispute, claim or controversy, whether based on past, present or future events, arising out of or relating to: this Agreement and any and all prior versions thereof (including the formation, breach, termination, enforcement, interpretation or validity thereof), the Service Professional's classification as an independent contractor, Service Professional’s provision of Services under this Agreement, the payments received by Service Professional for providing Services, Service Professional’s registration to use the Unlimit Potential Platform, disputes with any entity or individual arising out of or related to the use of the Unlimit Potential Platform, background checks, privacy, trade secrets, unfair competition, compensation, classification, minimum wage, seating, expense reimbursement, overtime, breaks and rest periods, retaliation, discrimination or harassment and claims arising under the Fair Credit Reporting Act, the Uniform Trade Secrets Act, the Defend Trade Secrets Act, Title VII of the Civil Rights Act of 1964, 42 U.S.C. §1981, Rehabilitation Act, Civil Rights Acts of 1866 and 1871, the Civil Rights Act of 1991, the Pregnancy Discrimination Act, Equal Pay Act, Americans With Disabilities Act, Age Discrimination in Employment Act, Family Medical Leave Act, Fair Labor Standards Act, Employee Retirement Income Security Act (except for claims for employee benefits under any benefit plan sponsored by the Company and (a) covered by the Employee Retirement Income Security Act of 1974 or (b) funded by insurance), Affordable Care Act, Genetic Information Non-Discrimination Act, Uniformed Services Employment and Reemployment Rights Act, Worker Adjustment and Retraining Notification Act, Older Workers Benefits Protection Act of 1990, Occupational Safety and Health Act, Consolidated Omnibus Budget Reconciliation Act of 1985, state or local statutes or regulations addressing the same or similar subject matters, and all other aspects of the Service Professional's relationship with Unlimit Potential whether arising under federal, state or local statutory and/or common law. The parties further agree that this Mutual Arbitration Provision covers all claims or disputes between you and a third-party concerning the provision of any background check of you by a consumer reporting agency and claims or disputes between you and any other third-party entity involved in requesting or in any way involved in making available, arranging and/or facilitating the Services.

Except as stated in Section 12.2(d), below, only an arbitrator, and not any federal, state, or local court or agency, shall have the exclusive authority to resolve any dispute relating to the interpretation, applicability, validity, enforceability, conscionability, and/or formation of this Mutual Arbitration Provision.

(a) If either party wishes to initiate arbitration, the initiating party must notify the other party in writing via certified mail, return receipt requested, or hand delivery within the applicable statute of limitations period. This demand for arbitration must include (1) the name and address of the party seeking arbitration, (2) a statement of the legal and factual basis of the claim, and (3) a description of the remedy sought. Any demand for arbitration by Service Professional must be delivered to: Unlimit Potential Headquarters in Powder Springs, GA.

(b) CLASS ACTION WAIVER-PLEASE READ. Unlimit Potential AND SERVICE PROFESSIONAL MUTUALLY AGREE THAT BY ENTERING INTO THIS AGREEMENT TO ARBITRATE, BOTH WAIVE THEIR RIGHT TO HAVE ANY DISPUTE OR CLAIM BROUGHT, HEARD OR ARBITRATED AS A CLASS ACTION AND/OR COLLECTIVE ACTION, AND AN ARBITRATOR SHALL NOT HAVE ANY AUTHORITY TO HEAR OR ARBITRATE ANY CLASS ACTION AND/OR COLLECTIVE ACTION (CLASS ACTION WAIVER). Unlimit Potential AND SERVICE PROFESSIONAL MUTUALLY AGREE THAT BOTH ARE WAIVING THE RIGHT TO BRING, PURSUE OR HAVE A CLAIM OR DISPUTE RESOLVED AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR COLLECTIVE PROCEEDING.

(c)REPRESENTATIVE ACTION WAIVER-PLEASE READ Unlimit Potential and Service Professional mutually agree that by entering into this agreement to arbitrate, both waive their right to have any dispute or claim brought, heard or arbitrated as a representative action, and an arbitrator shall not have any authority to arbitrate a representative action ("Representative Action Waiver").

(d) Notwithstanding any other clause contained in this Agreement, this Mutual Arbitration Provision, or the AAA Rules, as defined below, any claim that all or part of the Class Action Waiver and/or Representative Action Waiver is unenforceable, invalid, unconscionable, void or voidable may be determined only by a court of competent jurisdiction and not by an arbitrator. As stated above, all other disputes regarding interpretation, applicability, enforceability, or formation of this Mutual Arbitration Provision shall be determined exclusively by an arbitrator.

(e) Service Professional agrees and acknowledges that entering into this Mutual Arbitration Provision does not change Service Professional's status as an independent contractor in fact and in law, that Service Professional is not an employee of Unlimit Potential or any Service Requester and that any disputes in this regard shall be determined solely by an arbitrator and subject to final and binding arbitration as provided in this Mutual Arbitration Provision.

(f) Unless Unlimit Potential and Service Professional otherwise mutually agree in a signed writing, the arbitration will be conducted in the county where Service Professional resides. If Service Professional’s claim does not exceed $10,000 (including attorneys' fees), then the arbitration will be conducted solely on the basis of documents Unlimit Potential and Service Professional submit to the arbitrator, unless Service Professional requests a hearing or the arbitrator determines that a hearing is necessary. Unless Unlimit Potential and Service Professional both waive the right to a hearing in writing, a hearing shall always be conducted if Service Professional’s claim exceeds $10,000 (including attorneys' fees).

The Arbitrator shall be selected by mutual agreement of Unlimit Potential and Service Professional. Unless Unlimit Potential and Service Professional mutually agree otherwise, the Arbitrator shall be an attorney licensed to practice in the location where the arbitration proceeding will be conducted or a retired federal or state judicial officer who presided in the jurisdiction where the arbitration will be conducted, and who has experience in the underlying subject matter. If the parties cannot agree on the Arbitrator, the selection of the Arbitrator shall be governed by the American Arbitration Association Consumer Arbitration Rules ("AAA Rules").

Regardless of whether the Arbitrator is affiliated with the American Arbitration Association, the parties agree that any arbitration shall be governed by the AAA Consumer Arbitration Rules (including the AAA Consumer Arbitration Fee schedule) in effect at the time the arbitration is initiated, except as follows (unless and to the extent otherwise mutually agreed in writing by Unlimit Potential and Service Professional):

(1) The arbitration shall be heard by one Arbitrator selected in accordance with the AAA Rules. The Arbitrator shall be an attorney or a retired federal or state judicial officer with experience in the law underlying the dispute;

(2) The Arbitrator's fees shall be apportioned in accordance with applicable law as determined by the Arbitrator;

(3) Unless applicable law requires otherwise, and notwithstanding anything to the contrary in the applicable AAA rules or fee schedule(s), Unlimit Potential and you shall equally share filing fees and other similar and usual administrative costs, as are common to both court and administrative proceedings;

(4) The Arbitrator may issue orders (including subpoenas to third parties) allowing the parties to conduct discovery sufficient to allow each party to prepare that party's claims and/or defenses, taking into consideration that arbitration is designed to be a speedy and efficient method for resolving disputes;

(5) Except as provided in the Class Action Waiver and Representative Action Waiver, the Arbitrator may award all remedies to which a party is entitled under applicable law and which would otherwise be available in a court of law, but shall not be empowered to award any remedies that would not have been available in a court of law for the claims presented in arbitration. The Arbitrator shall apply the state or federal substantive law, or both, as is applicable;

(6) The Arbitrator may hear motions to dismiss and/or motions for summary judgment and will apply the standards of the Federal Rules of Civil Procedure governing such motions;

(7) The Arbitrator's decision or award shall be in writing with findings of fact and conclusions of law;

(8) Either Unlimit Potential or Service Professional may apply to a court of competent jurisdiction for temporary or preliminary injunctive relief on the ground that without such relief the arbitration provided in this Section 12.2 may be rendered ineffectual.

(g) Regardless of any other terms of this Agreement or Mutual Arbitration Provision, nothing prevents Service Professional from making a report to or filing a claim or charge with the Equal Employment Opportunity Commission, U.S. Department of Labor, Securities and Exchange Commission, National Labor Relations Board, or Office of Federal Contract Compliance Programs, and nothing in this Agreement or Mutual Arbitration Provision prevents the investigation by a government agency of any report, claim or charge otherwise covered by this arbitration provision. This Mutual Arbitration Provision also does not prevent federal administrative agencies from adjudicating claims and awarding remedies based on the claims addressed in this Section 12.2, even if the claims would otherwise be covered by this Mutual Arbitration Provision. Nothing in this Mutual Arbitration Provision prevents or excuses a party from satisfying any required conditions precedent and/or exhausting required administrative remedies under applicable law before bringing a claim in arbitration. Unlimit Potential will not retaliate against Service Professional for filing a claim with an administrative agency or for exercising rights (individually or in concert with others) under Section 7 of the National Labor Relations Act.

(h) The AAA Rules may be found at www.adr.org or by searching for AAA Consumer Arbitration Rules or by calling the AAA at 1-800-778-7879.

(i) Service Professional’s Right to Opt Out of Arbitration. Arbitration is not a mandatory condition of Service Professional’s contractual relationship with Unlimit Potential, and therefore Service Professional may submit a statement notifying Unlimit Potential that Service Professional wishes to opt out and not be subject to this Mutual Arbitration Provision. In order to opt out, Service Professional must notify Unlimit Potential of Service Professional’s intention to opt out by sending an email to our Administrators stating Service Professional’s intention to opt out. In order to be effective, Service Professional’s opt out notice must be provided within 30 days of the date this Agreement is electronically signed by Service Professional ("Effective Date"). If Service Professional opts out as provided in this paragraph, Service Professional will not be subject to any adverse action from Unlimit Potential as a consequence of that decision and he/she may pursue available legal remedies without regard to this Mutual Arbitration Provision. If Service Professional does not opt out within 30 days of the Effective Date of this Agreement, Service Professional and Unlimit Potential shall be deemed to have mutually and voluntarily agreed to this Mutual Arbitration Provision.

Service Professional acknowledges and agrees that if Unlimit Potential modifies any provision of this Agreement other than any term of this Section 12.2, Service Professional will not have a renewed opportunity to opt out of arbitration.

If, however, Unlimit Potential modifies this Mutual Arbitration Provision after the date you first agreed to this Agreement (or any subsequent changes to the Agreement), you may reject any such change to the Mutual Arbitration Provision by providing Unlimit Potential written notice of such rejection within 30 days of the date below. In order to be effective, the notice must include your full name and clearly indicate your intent to reject changes to the Mutual Arbitration Provision. By rejecting changes, you are agreeing that you will arbitrate any dispute between you and Unlimit Potential in accordance with the provisions of this Mutual Arbitration Provision as of the date you first agreed to this Agreement (or any subsequent changes to the Agreement).

(j) Right To Consult With A Lawyer: Service Professional has the right to consult with private counsel of Service Professional's choice for independent legal advice with respect to any aspect of this Agreement or Mutual Arbitration Provision, or any claim that may be subject to this Mutual Arbitration Provision.

(k) In the event any portion of this Mutual Arbitration Provision is deemed unenforceable, the remainder of this Mutual Arbitration Provision will be enforceable. In any case in which (1) the dispute is filed as a class, collective, or representative action and (2) there is a final judicial determination that all or part of the Class Action Waiver and/or Representative Action Waiver is invalid or unenforceable, the class, collective, or representative general action to that extent must be litigated in a civil court of competent jurisdiction, but the portion of the Class Action Waiver and Representative Action Waiver that is valid and enforceable shall be enforced in arbitration. To the extent that there are any claims to be litigated in a civil court of competent jurisdiction because a civil court of competent jurisdiction determines that the Class Action Waiver and/or Representative Action Waiver is unenforceable, the parties agree that litigation of those claims shall be stayed pending the outcome of any individual claims in arbitration.

12.3 Governing Law.
Except for the Mutual Arbitration Provision set forth in Section 12.2, which is governed by the Federal Arbitration Act, and except as may be prohibited by the law of the State in which Service Professional primarily works and resides, this Agreement shall be governed and interpreted pursuant to the laws of the state in which the Service Professional performs the majority of his or her services under the Agreement, notwithstanding any principles of conflicts of law.

13. SERVICE REQUESTER PRIVACY

Service Professional understands that in performing the Services, he or she will receive certain private and/or confidential information regarding the Service Requesters and will have access to their homes and personal belongings. Except upon order of government authority (e.g., court, administrative agency) having jurisdiction, or upon written consent by the Service Requester, Service Professional agrees that he or she shall not publish, disseminate or disclose, for his or her own benefit or the benefit of any third party, any confidential information regarding the Service Requesters, including addresses, telephone numbers and/or financial information. Service Professional further agrees not to engage in any activity which violates the privacy of any Service Requester, including, but not limited to, taking unauthorized photographs or making unauthorized audio or video recordings of a Service Requester or his or her homes or personal belongings, or publishing, disseminating or disclosing any such photographs or recordings. Service Professional acknowledges that his/her failure to comply with the foregoing shall constitute a material breach of this Agreement.

14. MODIFICATION

Service Professional hereby expressly acknowledges and agrees that, by using or receiving access to the Unlimit Potential Platform, Service Professional and Unlimit Potential are bound by the then-current version of this Agreement, including any supplements to this Agreement or documents incorporated herein, including the Schedules below, except as stated in Section 12.2(i) with respect to a Service Professional’s right to opt-out of the arbitration. Service Professional shall be bound by modifications to this Agreement only upon Service Professional’s electronically signing any modifications or supplements.

15. DEFEND TRADE SECRETS ACT OF 2016

Service Professional acknowledges receipt of the following notice under 18 U.S.C § 1833(b)(1): An individual shall not be held criminally or civilly liable under any Federal or State trade secret law for the disclosure of a trade secret that (A) is made (i) in confidence to a Federal, State, or local government official, either directly or indirectly, or to an attorney; and (ii) solely for the purpose of reporting or investigating a suspected violation of law; or (B) is made in a complaint or other document filed in a lawsuit or other proceeding, if such filing is made under seal.

16. MISCELLANEOUS

All notices other than those required by Section 3.1 and Section 12, requests, consents, claims, demands, waivers, and other communications hereunder (each, a Notice) shall be in writing and addressed to the parties at the addresses set forth on the first page of this Agreement (or to such other address that may be designated by the receiving party from time to time in accordance with this Section). The parties agree that Notices shall be delivered by personal delivery, nationally recognized overnight courier (with all fees pre-paid), facsimile or electronic mail (with confirmation of transmission), or certified or registered mail (in each case, return receipt requested, postage prepaid). This Agreement, together with any other documents incorporated herein by reference, and related exhibits, schedules, and addenda (if any) constitutes the sole and entire agreement of the parties to this Agreement with respect to the subject matter contained herein, and supersedes all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to such subject matter. This Agreement may only be amended, modified, or supplemented by an agreement in writing signed by each party hereto, and any of the terms thereof may be waived, only by a written document signed by each party to this Agreement or, in the case of waiver, by the party or parties waiving compliance. Except as expressly provided otherwise in this Agreement, if any term or provision of this Agreement is determined to be invalid, illegal or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of this Agreement or invalidate or render unenforceable such term or provision in any other jurisdiction. This Agreement may be executed in multiple counterparts, including by facsimile or other electronic signature, each of which shall be deemed an original and all of which together shall constitute one instrument. Headings appear solely for convenience of reference. Such headings are not part of this Agreement and shall not be used to construe it.

This Agreement may not be amended, by implication or otherwise, by any marketing material contained on Unlimit Potential's website or the Unlimit Potential Platform. Nothing contained in this provision or this Agreement is intended to or shall be interpreted to create any third-party beneficiary claims, except as expressly set forth in Section 12.2.

Service Professional acknowledges that he/she has read and understands this Agreement and also acknowledges that he/she had a reasonable and adequate opportunity to seek and receive independent legal advice, at the Service Professional's own expense, prior to signing this Agreement.      </p>
      <p>
        By accepting this Agreement, Service Professional authorizes Unlimit Potential to withhold the amounts listed in Schedule 2 (where applicable) as payment of liquidated damages from Service Professional's Service Fees.
      </p>
      <p>
        You understand that your electronic signature is as legally binding as a handwritten signature.
      </p>
    </div>
        </main>  </Box>
</AppShell>
 
  )
}
