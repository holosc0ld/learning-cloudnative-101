(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{eYEy:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return p}));var n=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),b=a("013z"),r=(a("qKvR"),{}),c={_frontmatter:r},s=b.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Solution - NodeJS"),Object(l.b)("p",null,"Utilize ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-nodejs-console-sample/docs/Kubernetes_Service.md"}),"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-nodejs-console-sample/docs/Kubernetes_Service.md")," as needed for pointers."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Clone the git repository",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/ibm-messaging/event-streams-samples.git\n"))),Object(l.b)("li",{parentName:"ol"},"Change directory",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"cd event-streams-samples/kafka-nodejs-console-sample\n"))),Object(l.b)("li",{parentName:"ol"},"Acquire the Service Credentials from the ",Object(l.b)("strong",{parentName:"li"},"Service Credentials")," tab of your IBM Event Streams on Cloud instance and save it to a file ",Object(l.b)("inlineCode",{parentName:"li"},"credentials.json")),Object(l.b)("li",{parentName:"ol"},"Create kubernetes secret ",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create secret generic eventstreams-binding --from-file=binding=credentials.json\n"))),Object(l.b)("li",{parentName:"ol"},"Deploy the App",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl apply -f kafka-nodejs-console-sample.yaml\n"))),Object(l.b)("li",{parentName:"ol"},"Wait and get the logs",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl wait pod kafka-nodejs-console-sample --for=condition=Ready\nkubectl logs kafka-nodejs-console-sample --follow\n"))),Object(l.b)("li",{parentName:"ol"},"Delete the pod",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl delete pod kafka-nodejs-console-sample\n"))),Object(l.b)("li",{parentName:"ol"},"Delete the topic if you are using the the free plan (free plan only allows one topic/partition)")),Object(l.b)("h2",null,"Solution - Java"),Object(l.b)("p",null,"Utilize ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-java-console-sample/docs/Kubernetes_Service.md"}),"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-java-console-sample/docs/Kubernetes_Service.md")," as needed for pointers."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Clone the git repository",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/ibm-messaging/event-streams-samples.git\n"))),Object(l.b)("li",{parentName:"ol"},"Change directory",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"cd event-streams-samples/kafka-java-console-sample\n"))),Object(l.b)("li",{parentName:"ol"},"Acquire the Service Credentials from the ",Object(l.b)("strong",{parentName:"li"},"Service Credentials")," tab of your IBM Event Streams on Cloud instance and save it to a file ",Object(l.b)("inlineCode",{parentName:"li"},"credentials.json")),Object(l.b)("li",{parentName:"ol"},"Create kubernetes secret ",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create secret generic eventstreams-binding --from-file=binding=credentials.json\n"))),Object(l.b)("li",{parentName:"ol"},"Deploy the App",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl apply -f kafka-java-console-sample.yaml\n"))),Object(l.b)("li",{parentName:"ol"},"Wait and get the logs",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl wait pod kafka-java-console-sample --for=condition=Ready\nkubectl logs kafka-java-console-sample --follow\n"))),Object(l.b)("li",{parentName:"ol"},"Delete the pod",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl delete pod kafka-java-console-sample\n"))),Object(l.b)("li",{parentName:"ol"},"Delete the topic if you are using the the free plan (free plan only allows one topic/partition)")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-eda-activities-labs-lab-0-solution-mdx-67c321f226289afc4cab.js.map