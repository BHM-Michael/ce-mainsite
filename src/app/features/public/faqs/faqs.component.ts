import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  faqs = [
    { question: 'What kind of company is Clean Encounters?', answer: 'Clean Encounters is a professional residential cleaning company that provides light domestic cleaning and home upkeep services for adult clients.' },
    { question: 'What services do you offer?', answer: 'We provide light cleaning and domestic tasks such as laundry, dishes, dusting, vacuuming, sweeping, tidying, and general home upkeep.' },
    { question: 'Do you offer deep cleaning or heavy scrubbing?', answer: 'No. Clean Encounters focuses on light domestic cleaning only. We do not provide deep cleaning, scrubbing, restoration work, or heavy buildup removal.' },
    { question: 'Are bathrooms included in your services?', answer: 'Bathrooms are not a primary focus of our services. Our work is centered on open living areas and light household upkeep.' },
    { question: 'Is Clean Encounters a topless cleaning company?', answer: 'Yes. Our cleaners wear topless attire as part of the required uniform. This is disclosed upfront, agreed to by employees, and governed by strict professional boundaries.' },
    { question: 'Is this a sexual or adult service?', answer: 'No. Clean Encounters provides professional cleaning services only. Sexual conduct, requests, or behavior are strictly prohibited.' },
    { question: 'Are your employees professionals?', answer: 'Yes. All Clean Encounters cleaners are W-2 employees who are trained, contracted, and held to clear professional standards.' },
    { question: 'Why do you require clients to be 21+?', answer: 'We exclusively serve adult clients to maintain a controlled, professional environment and ensure clear consent and boundaries.' },
    { question: 'How is pricing determined?', answer: 'Pricing is time-based rather than square-foot based. Light domestic services such as laundry and dishes vary by household activity, not home size.' },
    { question: 'Do you offer recurring services?', answer: 'Yes. We offer recurring sessions for clients who want consistent home upkeep on a weekly or biweekly basis.' },
    { question: 'What areas of the home do you clean?', answer: 'We focus on open living spaces such as living rooms, offices, kitchens, and common areas.' },
    { question: 'Do you clean inside appliances?', answer: 'No. Inside appliances are outside our standard scope of service.' },
    { question: 'What happens if a client crosses a boundary?', answer: 'Any inappropriate behavior results in immediate termination of the session without refund. Clean Encounters enforces a zero-tolerance policy.' },
    { question: 'Is security involved?', answer: 'Yes. Clean Encounters utilizes security protocols to protect both employees and clients.' },
    { question: 'Are contracts required?', answer: 'Yes. All clients and employees sign agreements outlining scope of service, conduct expectations, and boundaries.' },
    { question: 'Can I request specific tasks during a session?', answer: 'Yes, as long as the tasks fall within our light domestic cleaning scope and do not require scrubbing, confined spaces, or heavy labor.' },
    { question: 'Do I need to be home during the service?', answer: 'You may be present or away during the session, depending on your preference and prior arrangements.' },
    { question: 'Do you provide your own supplies?', answer: 'Yes. Clean Encounters provides appropriate supplies for light domestic cleaning.' },
    { question: 'Do you take last-minute bookings?', answer: 'Limited last-minute availability may be offered depending on scheduling. Priority is given to established and recurring clients.' },
    { question: 'How do I get started?', answer: 'Simply submit a private inquiry through our website. We will review your request, confirm details, and follow up with availability and next steps.' }
  ];
}
