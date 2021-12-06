import {Subject,Publisher,ExiprationCompleteEvent} from "@teronpackages/common"

export class ExiprationCompletePublisher extends Publisher<ExiprationCompleteEvent>{
    subject:Subject.ExpirationComplete=Subject.ExpirationComplete  
} 