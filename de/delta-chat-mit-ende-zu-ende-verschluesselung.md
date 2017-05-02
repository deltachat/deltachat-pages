---
title: Delta Chat mit Ende-zu-Ende-Verschlüsselung
layout: default-de
---

##Delta Chat mit "Ende zu Ende"-Verschlüsselung

_(In Arbeit für die nächsten Versionen - voraussichtlich fertig ab April)_  

_**Was leistet die "Ende zu Ende" Verschlüsselung?** Sie hat auf jeden Fall höchstes Ansehen, bei den Hamburger Datenschützern. Delta Chat hat sie eingebaut und zwar so, dass die Nutzer keine irren Fachbegriffe kennen oder die Prüfung mit den unverständlichen Anweisungen bestehen müssen. Sie müssen gar nichts darüber wissen. Sie funktioniert einfach so - vollautomatisch. Doch schaden tut es nicht, wenn man weiß: Wie geht das bei Delta Chat?_ 

Auf dem Handy müssen die Nachrichten natürlich zunächst im Klartext getippt und zu sehen sein. Damit hier niemand rankommt, können die meisten ihr **Handys komplett verschlüsseln** - mit Hilfe der bordeigenen Technik des Betriebssystems. Dann ist alles vor kompromittierenden Fremdzugriffen ziemlich sicher. Und dann ist das alles nicht für Dritte lesbar, solange sie nicht das Handy-Passwort haben. Doch leider kostet das viel Performance und Akkulaufzeit und wird daher kaum genutzt. 

Die von Delta Chat verwendeten Schlüssel haben wichtige Eigenschaften. Ein Schlüssel ist nur zum **Verschließen** geeignet und ein anderer nur zum Aufschließen. Wie das funktioniert weiß jeder, der schon mal seinen Portemonnaie oder etwas Wichtiges verlegt hat, nach erfolgloser Suche schließlich entnervt, i.d.R. seine Frau fragt: "Schatz, hast Du meinen Portmonnaie gesehen?" und die, wie aus der Pistole geschossen, antwortet: "Kommode, Schlafzimmer". Verbaseln einer Sache wäre quasi wie das Verschlüsseln und der helfende Hinweis wäre das **Entschlüsseln**. Was dem Alltag ein Desaster, ist der Nachrichtentechnik ein Segen, ein ziemlich sicheres Verschlüsselungsverfahren. 

Beim Nachbau mit Bits und Bytes nennt man den Vorgang des Verlierens "öffentliches Verschlüsseln". Mit Hilfe einer Zufallszahl wird eine Nachricht codiert, unverständlich gemacht, mit dem sogenannten "**öffentlichen Schlüssel**". Den kann ruhig jeder kennen und sogar benutzen. Damit kann man Texte ja nur unverständlich, unentschlüsselbar, nutzlos machen.  

Zur Entschlüsselung ist der sogenannte "**private Schlüssel**" nötig, also die Zahl der Verschlüsselung, also quasi meine Frau, die meist genau weiß, wo ich wieder was verlegt habe. Delta Chat braucht stets zwei Schlüssel für die Korrespondenz.

Schicke ich meine **allererste E-Mail** mit Delta Chat an Dich, erzeugt Delta Chat zuvor für mein Handy dieses Schlüsselpaar (öffentlich und privat). Meine erste Mail wird nun unverschlüsselt an Dich versendet - und zwar zusammen mit meinem öffentlichen Codierungs-Schlüssel, so wie auch alles weiteren Mails. 

**Antwortest** Du nun mit Delta-Chat, so erzeugt Delta-Chat auch für Dich und Dein Handy so ein Schlüsselpaar - ein anderes. Deine Antwort wird ab jetzt schon mit meinem öffentlichen Schlüssel codiert, wird damit also völlig unverständlicher Zeichensalat. Niemand der mitliest kann sie verstehen. Und dieser Mail fügt Delta Chat Deinen öffentlicher Schlüssel bei. Den nutze ich bzw. Delta Chat künftig, um Nachrichten an Dich zu verschlüsseln. 

Trifft **Deine Nachricht bei mir** ein, decodiere ich sie mit meinem privaten Schlüssel. Der sagt mir ja, in welchem Heuhaufen Du die Nadel wo versteckt hast. Und fertig! Ab diesem Zeitpunkt ist die Korrespondenz zwischen Dir und mir verschlüsselt und für Dritte unverständlich. 

Auch auf dem Server der E-Mail-Provider liegen nur verschlüsselte Nachrichten vor, die Delta Chat mit dem jeweiligen privaten Schlüssel wieder lesbar machen muss - oder ggf. ein anderes Programm, das ebenfalls den privaten Schlüssel mit Hilfe des OpenPGP-Protokolls verwerten kann."

**Fazit**: Ab der zweiten Mail ist Delta-Chat verschlüsselt - für alle weiteren Korrespondenzen mit diesem Absender, aber nur, sofern auch er Delta Chat verwendet oder sein E-Mail-Provider auch das allgemein zugängliche Verschlüsselungsverfahren mit dem Namen "OpenPGP-Protokoll" anwendet. Nutzt Du ein unsicheres E-Mail Programm, wirst Du von Delta Chat nur unverständlich verschlüsselten Zeichensalat im Eingangskorb finden oder musst die Mail eben bewusst unverschlüsselt senden. 


##**Schlüssel knacken**

Schlüssel sind zum Knacken da, könnten Hacker sportlich meinen. Doch es gibt Hürden - ziemlich hohe sogar. 

**Verwundbar:** Wenn auf Deinem Handy heimlich eine Spionagesoftware mitliest, auch Deinen privaten Schlüssel also, kann der Spion damit alles verständlich machen. Da kannst Du nix machen, außer den Spion auf Deinem Handy entdecken und löschen.  

**Erste Hürde:** Die von Delta Chat verwendete föderale E-Mail Technologie bereitet eine Schwierigkeit. Der **Transportweg ist chaotisch**. Er verläuft durch immer wieder andere, nicht vorhersehbare Netzknoten zum E-Mail-Provider und ebenso chaotisch wieder zurück. Die Verbindung von Sender zum Empfänger ist also schwer bis gar nicht nachvollziehbar. Es gibt hier eben keinen Zentralserver, wo man Deine Korrespondenz einfach abfangen kann, wie bei den Messengern von WhatsApp und Co beispielsweise. Du kannst sogar Deinen eigenen E-Mail Server in Deinem Heim- oder Firmennetzwerk aufbauen. Dann wird die Korrespondenz nirgends "draußen im Netz" irgendwo archiviert. Oder Du wählst einen guten E-Mail-Provider im Internet, dem Du vertraust - und bei Misstrauen wechseln kannst. 

**Zweite Hürde:** Deine Nachricht könnte auch mit einem **Entschlüsselungsprogramm** geknackt werden - theoretisch. Das wäre ein Programm, dass Nadeln im Heuhaufen findet. Nicht unmöglich, doch das ist sehr aufwendig und braucht viel Zeit. Mit Hochleistungsrechnern könnte auf diese Art wohl eine einzige Nachricht geknackt werden - und zwar statt in den statisch nötigen eine Million Jahren Rechenzeit, vielleicht schon in einem Monat oder schneller. Doch das geht vielleicht mit wenigen Nachrichten, nicht aber mit dem gesamten E-Mail-Verkehr. 

**Versprechen prüfen** können Sie letztlich nur dann, wenn der Messenger als Open Source veröffentlicht ist - ob seine Verschlüsselung wirklich lückenlos sicher ist. Nur so können Sie im Quell-Code nach Hintertüren suchen. Und auch dann gibt es noch ein kleines Einfallstor für Manipulationen. Ist die App im Store oder auf der Website des Anbieters wirklich identisch mit dem unter Open Source gestellten Quellcode? Bei vielen Messengern, die als sicher und verschlüsselt gelten, müssen Sie sich auf das Versprechen des Herstellers stützten, ihm einfach vertrauen, besonders bei WhatsApp. Gewissheit könnten Sie sich selbst dann nicht verschaffen, wenn Sie wollten und viel Prüfaufwand investieren. 


##Im Hintergrund

Mit vielen E-Mail-Anbietern kann Delta Chat auch mit "Ende zu Ende" PGP-Verschlüsselung kommunizieren, zum Beispiel:

- [Mailbox.org (Server in Deutschland)](https://mailbox.org) 
- [Posteo.de (Server stehen in Deutschland)](https://posteo.de/de)
- [Mailfence (belgischer Provider)](https://mailfence.com/index.jsp)

Mehr zum Verschlüsselungsverfahren mit dem OpenPGP-Protokoll von GruPG: 

- https://de.wikipedia.org/wiki/OpenPGP , 
- http://openpgp.org/
- https://gnupg.org/

>PS: Duzen erfolgt nicht aus Respektlosigkeit, sondern weil das Thema allein schon so kompliziert und ernst, ist, dass ein "Sie" es unnötig kälter machen würde. 
