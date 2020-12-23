#!/usr/bin/python
# -*- coding: utf-8 -*-

ANSIBLE_METADATA = {'metadata_version': '1.1',
                    'status': ['stableinterface'],
                    'supported_by': 'samir'}

EXAMPLES = r'''
- name: Affiche la date du serveur
  time:
    format: UTC
    locale: FR

'''

RETURN = r'''
results:
  description: resultat
'''

DOCUMENTATION = r'''
---
module: time
author: samir
description: Affiche la date du serveur
options:
  format:
    description: Format d'affichage
  locale:
    description: Localisation
    required: yes
'''

import datetime
import json

date = str(datetime.datetime.now())
print(json.dumps({
    "Nous sommes le " : date
}))
