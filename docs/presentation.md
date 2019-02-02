---
author: Alexandre Hajjar
title: OpenGreffe @ FOSDEM2019
date: Feb 3, 2019
---

# Introduction

## Proceedings from a hackathon

Legal + technical challenges

Making technology drive innovation in law

With fellow @onyb

## Incorporation is a closed process

Observed in France, through Legalstart

## Open it up

Taking lesson from open-source, open data initiatives and public blockchains

# Incorporating today

With the example of France

## Very formal process

## Entirely owned by Greffes

State designated entities

# What is a company

## Base attributes

Associates, capital and a common goal

=>

```
Company = { Name,
            [AssociatePerson],
            CapitalAmount
            }
```

## To be identifyable on a blockchain

```
Company = { Name,
            [AssociatePerson],
            CapitalAmount,
            EthereumAddress
            }
```

## Recording on a blockchain

Companies are recorded in the main Opengreffe record

## Process

1. Associates: setup multisig addr + submit to Opengreffe
2. Verifyer: due-diligence and approval => :baby:
3. Other business: lookup the company on Opengreffe

## What this allows

- identification of company with Ethereum address
- building long-term trust
- accountability of associates

## Does it work legally

Yes, under Articles 1832 and 1871, using "Société en Participation"

(but unlimited liability and no moral entity)

# How good

## Open a closed system

And replace a monopoly!

## More auditable and secure

Processes that are moved on-chain are more easily auditable and can be
verifyably safe

Moving more of the due diligence process on-chain would be interesting

## Allow innovation

Notably by automatically resolving an Ethereum address to a company
identification, allowing automated business (DAOs...)
