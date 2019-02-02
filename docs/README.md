# Opengreffe

A dencetralized record of companies identities.

See [Opengreffe@FOSDEM 2019 slides](https://lajarre.github.io/opengreffe).

## What Opengreffe does

Opengreffe allows entrepreneurs to **create** a **company**, **publish** this
creation and link the company to an **Ethereum address**.

Some semantic precisions:

- We will refer to an older and more fundamental definition of "a company": 
    _a number of persons united to perform or carry out anything jointly_.
- By "creating a company" here we mean to give birth to it by defining its
    fundamental attributes: the associates, the capital (or goods) allocated,
    its name, and time of creation.
- By "publishing" we mean making it able for everyone to know which company is
    created by whom and linked to which Ethereum address.

## What Opengreffe enables

By doing so, entrepreneurs willing to create a company without incorporating
in their current legal system can still build a company in a formal way.

This enables a series of interesting properties that they can take advantage
with their partners, customers, etc.:

- Public identification of the company name, which notably allows to build
    trust around the linked Ethereum address by leveraging "reputation capital"
    that the company is generating (for example having very few payment
    defaults).
- Public identification of the associates of the company, and thus ability to
    derive reputation scoring for the company based on the associates history
    (business track record for example), and ability to sue them in case of a 
    litigation.
- Publication of the capital of the company, which allows knowing how much trust
    the associates have in their own company.

In other words, forming a company on Opengreffe allows:

- Building trust and reputation on the company.
- Building trust and reputation on its associates.
- Building accountability on its associates.

## How Opengreffe could work in real life

_In this section, we are building our reasoning based on French law and its _Code
Civil_._

Going through the steps defined in the Opengreffe API will ensure the company is
considered a "société" (or "société de fait") in the sense of the
[Article 1832](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070721&idArticle=LEGIARTI000006444040).

There is also a more advanced, albeit simple, legal framework which applies: the
["Société En Participation"](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=269187E99D9974DEBAB7327A84A630D7.tplgfr26s_3?idSectionTA=LEGISCTA000006136392&cidTexte=LEGITEXT000006070721&dateTexte=20190129). 
This will allow some basic considerations to be ensured legally (like making
clear the fact that associates are going to be committed in their own name
regarding any contractual party).

Let's note that this doesn't allow for limited liability (thus, this is
unlimited liability) neither for creation of a legal entity.

## How to create a company on Opengreffe

Base scenario:

0. :sparkles: Some _Associates_ want to join forces and start working on a new
   project.
1. :moneybag: They create a multisig address on Ethereum, and each of them
   send some capital on it.
2. :pencil: They create a company name and submit it, along their identities,
   the allocated capital and the aforementioned Ethereum address, to the
   Opengreffe record contract. Their company appears as waiting for
   validation.
3. :passport_control: A _Verifier_ contacts the _Associates_ (via off-chain
   means) and performs due-diligence, notably by:
   - Verifying their identities.
   - Verifying that they indeed collectively have access to the wallet.
   - Verifying that the capital is indeed available on the wallet address.
4. :baby: After the due-diligence is successful, the _Verifier_ updates the
   company entry in the record and activates it. The company is officially
   born!
5. :mag: Some _Random person_ get in contact with the company and
   wants to do business with it:
   - If he has the company name, he can looks up the Ethereum address on
       Opengreffe and send money to the company.
   - If he gets in business with the Ethereum address but doesn't know which
       company it corresponds to, he can request the Opengreffe record and
       retrieve the company identification, thus allowing him to decide what to
       do next.

Definition of parties:

- Associates: people engaging their goods/efforts in the company.
- Verifier: another company performing due diligence on the attributes of the
   company (the associates identity and the capital).
- Random person: someone who wants to get information about the said company.

Note: this random person could be an insurance company which wants to match
some credit history and scoring with the Ethereum address of the company. This
version can especially make sense for automated agents like DAOs.
