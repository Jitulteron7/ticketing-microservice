import {Subject,Publisher,PaymentCreatedEvent} from "@teronpackages/common"

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject:Subject.PaymentCreated=Subject.PaymentCreated
}